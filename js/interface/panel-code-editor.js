


var mainEditor;



jeda.addBoard("code editor", `

    <br>
    <div id="cm-editor-title"></div>
    <br>
    <textarea id="cm-editor"></textarea>

`, function () {

        mainEditor = CodeMirror.fromTextArea(document.getElementById("cm-editor"), {
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            theme: "darcula"
        });
    }, 500
);



function setEditorTitle(txt) {

    document.getElementById("cm-editor-title").innerHTML = "&nbsp; code editor → " + txt;
}



setEditorTitle("empty");