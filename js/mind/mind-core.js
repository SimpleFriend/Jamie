





var vectors = {};



var dimensions = [];



function kdTreeDistance(a, b){

    return a.getDistance(b);
}



var kdtree = new kdTree([], kdTreeDistance, dimensions);



var db = levelgraph(level("coredb"));


const voc = {
    isa: "isa",
    gen: "gen"
};



db.clear = function() {

    db.get({}, function(err, results) {
        results.forEach(result => db.del(result));
    });    
}

db.clear();


function forward() {

    db.search([
        {
            subject: db.v("superconcept"),
            predicate: "gen",
            object: db.v("concept")
        },
        {
            subject: db.v("instance"),
            predicate: "isa",
            object: db.v("concept")
        },

    ], function(err, results) {

        document.getElementById("simple-inference-output").innerHTML = '';

        results.forEach(result => {

            //document.getElementById("simple-inference-output").innerHTML += JSON.stringify(result, null, 4);

            let triple = { subject: result.instance, predicate: "isa", object: result.superconcept};
            document.getElementById("simple-inference-output").innerHTML += JSON.stringify(triple, null, 4);
            
            db.put(triple)
        });
    });
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
    let positions = ["predicate", "subject", "object"];
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

            currentTriple[ positions[pos] ] = buildQuery ? db.v(parsed[p].variable) : parsed[p].variable + '?';
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

                db.put(buildTriples(struct.slice(1)));
            }



            if (struct[0].head == "rule") {

                buildRule(struct.slice(1));
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

                // double it because levelgraph is order-dependent and feels broken
                let doubleRules = struct.slice(1).concat( struct.slice(1) );

                let tri = buildTriples(doubleRules, labels, true);
                query = query.concat(tri);

                console.log("[tri labels]", labels);
                console.log("[tri]", tri);
            }



            if (struct[0].head == "do") {

                todo.push(struct.slice(1));
            }
        }
    });
    
    db.search(query, function(err, results) {

        results.forEach(result => {

            Object.assign(labels, result);

            console.log("[result]", result);

            todo.forEach(doing => { 

                console.log("[doing]", doing);
                console.log("[labels]", labels);
                db.put(buildTriples(doing, labels));
            });
        });
    });
}














