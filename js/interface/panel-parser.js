


jeda.addBoard("parser", `

    <button onclick="parseEditor()">parseEditor()</button>
    <button onclick="dump()">dump()</button>
    <pre id="parsed-from-ed"></pre>

    `, function () {

}, 500
);



function parseEditor() {

    var source = mainEditor.getValue();
    var parsed = parser.parse(source);

    buildStructures(parsed);
}



function dump() {

    tripleStore.get({  }, function (err, list) {

        document.getElementById("parsed-from-ed").innerHTML += "<br>TripleStore" + JSON.stringify(list, null, 4);
        document.getElementById("parsed-from-ed").innerHTML += "<br>Dimensions" + JSON.stringify(dimensions, null, 4);
        document.getElementById("parsed-from-ed").innerHTML += "<br>VectorStore" + JSON.stringify(vectorStore, null, 4);
        document.getElementById("parsed-from-ed").innerHTML += "<br>PointStore" + JSON.stringify(pointStore, null, 4);
    });

}








