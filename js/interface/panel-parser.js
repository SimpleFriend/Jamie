


jeda.addBoard("parser", `

    <button onclick="parseEditor()">parseEditor()</button>
    <pre id="parsed-from-ed"></pre>

    `, function () {

}, 500
);



function parseEditor() {

    var source = mainEditor.getValue();
    var parsed = parser.parse(source);

    buildStructures(parsed);

    db.get({  }, function (err, list) {

        document.getElementById("parsed-from-ed").innerHTML = JSON.stringify(list, null, 4);
    });

}


