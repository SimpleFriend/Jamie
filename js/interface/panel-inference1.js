


jeda.addBoard("simple inference", `

    <pre id="simple-inference-output"></pre>
    <button onclick="forward()">forward()</button>
    <button onclick="simpleInferenceWhatsFelix()">simpleInferenceWhatsFelix()</button>
`);


db.put({ subject: "animal", predicate: "gen", object: "cat" });

db.put({ subject: "felix", predicate: "isa", object: "cat" });



function simpleInferenceWhatsFelix() {

    db.search([
        {
            subject: "felix",
            predicate: "isa",
            object: db.v("what")
        }
    ], function(err, result) {
        
        document.getElementById("simple-inference-output").innerHTML += JSON.stringify(result, null, 4);
    });
}