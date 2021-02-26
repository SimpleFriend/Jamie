





const positions = ["predicate", "subject", "object"];





var dimensions = {};





function kdTreeDistance(a, b){

    return a.getDistance(b);
}





var pointStore = new kdTree([], kdTreeDistance, Object.keys(dimensions));

var vectorStore = {};

var tripleStore = levelgraph(level("tripleStore"));






const voc = {
    isa: "isa",
    gen: "gen"
};





tripleStore.clear = function() {

    tripleStore.get({}, function(err, results) {
        results.forEach(result => tripleStore.del(result));
    });    
}

tripleStore.clear();





function insertVector(key, vector) {

    vectorStore[key] = vector;

    let point = Object.assign({ key: key }, vector.vector);
    pointStore.insert(point);
}





tripleStore.originalPut = tripleStore.put;

tripleStore.put = function(triples) {

    if (!Array.isArray(triples)) triples = [triples];

    triples.forEach(triple => {
        positions.forEach(pos => {

            if (!vectorStore[ triple[pos] ]) insertVector( triple[pos], new Vector() );
        });
    });

    tripleStore.originalPut.apply(this, arguments);
}





const newId = (function() {
    var num = 0n;
    return function(identifier) {
        let id = identifier + '/' + num;
        num = num + 1n;
        return id;
    }
})();





function buildTriples(parsed, existingLabels, buildQuery) {

    let labels = existingLabels || {};
    let result = [];

    let p = 0;
    let pos = 0;
    let currentTriple = {};

    while (p < parsed.length) {

        if (parsed[p].literalTriple) {
            result.push(parsed[p].literalTriple);
        }

        if (parsed[p].directReference || parsed[p].instanceName) {

            currentTriple[ positions[pos] ] = parsed[p].directReference || parsed[p].instanceName;
        }

        if (parsed[p].variable) {

            currentTriple[ positions[pos] ] = buildQuery ? tripleStore.v(parsed[p].variable) : parsed[p].variable + '?';
        }

        if (parsed[p].label) {

            if (labels[parsed[p].label]) {

                currentTriple[ positions[pos] ] = labels[parsed[p].label];

            } else {

                let instance = newId(parsed[p].label);
                currentTriple[ positions[pos] ] = instance;
                result.push({
                    subject: instance,
                    predicate: voc.isa,
                    object: parsed[p].label
                });
            }
        }

        if (parsed[p].instanceLabel) labels[parsed[p].instanceLabel] = currentTriple[ positions[pos] ];

        ++pos;
        if (pos > 2) {
            result.push(currentTriple);
            currentTriple = {};
            pos = 0;
        }

        ++p;
    }
    return result;
}





function buildStructures(parsed) {
    
    parsed.forEach(struct => {

        if (Array.isArray(struct)) {



            if (struct[0].head == "put") {

                tripleStore.put(buildTriples(struct.slice(1)));
            }



            if (struct[0].head == "rule") {

                buildRule(struct.slice(1));
            }



            if (struct[0].head == "dim") {

                buildDimension(struct.slice(1));
            }



            if (struct[0][0] && struct[0][0].head == "vec") {

                buildVector(struct[0][1].label, struct.slice(1));
            }



        }
    });
}





function buildRule(parsed) {

    let labels = {};
    var query = [];
    var todo = [];

    parsed.forEach(struct => {

        if (Array.isArray(struct)) {

            if (struct[0].head == "if") {

                // double it because levelgraph is order-dependent
                // which is not the expected behavior
                let doubleRules = struct.slice(1).concat( struct.slice(1) );

                let tri = buildTriples(doubleRules, labels, true);
                query = query.concat(tri);
            }

            if (struct[0].head == "do") {

                todo.push(struct.slice(1));
            }
        }
    });

    tripleStore.search(query, function(err, results) {

        results.forEach(result => {

            Object.assign(labels, result);

            todo.forEach(doing => { 

                tripleStore.put(buildTriples(doing, labels));
            });
        });
    });
}





function buildDimension(parsed) {

    parsed.forEach(struct => {

        dimensions[struct[0].head] = struct.slice(1).map(value => value.label);
    });

}





function buildVector(target, vec) {

    vectorStore[target] = buildAnonymousVector(vec);
}





function buildAnonymousVector(parsed) {

    let result = new Vector();

    parsed.forEach(struct => {

        result.add(new Vector({ [struct[0].head]: struct[1].vectorComponent }));
    });

    return result;
}















