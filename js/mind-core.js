





var vectors = {};



var dimensions = [];



function kdTreeDistance(a, b){

    return a.getDistance(b);
}



var kdtree = new kdTree([], kdTreeDistance, dimensions);



var db = levelgraph(level("coredb"));





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









