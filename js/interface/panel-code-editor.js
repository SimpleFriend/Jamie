


var mainEditor;



CodeMirror.defineSimpleMode("simplemode", {
    
    start: [

        //{ regex: /"(?:[^\\]|\\.)*?(?:"|$)/, token: "string" },

        /*{
            regex: /(function)(\s+)([a-z$][\w$]*)/,
            token: ["keyword", null, "variable-2"]
        },*/

        /*{
            regex: /(?:function|var|return|if|for|while|else|do|this)\b/,
            token: "keyword"
        },*/

        { regex: /true|false|null|undefined/, token: "atom" },

        {
            regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,
            token: "number"
        },

        { regex: /\/\/.*/, token: "comment" },

        //{ regex: /\/(?:[^\\]|\\.)*?\//, token: "variable-3" },

        { regex: /\/\*/, token: "comment", next: "comment" },
        
        //{ regex: /[-+\/*=<>!]+/, token: "operator" },

        { regex: /[\{\[\(]/, indent: true },
        { regex: /[\}\]\)]/, dedent: true },

        { regex: /[a-z$][\w$]*/, token: "variable" },

        //{ regex: /<</, token: "meta", mode: { spec: "xml", end: />>/ } }
    ],

    comment: [
        { regex: /.*?\*\//, token: "comment", next: "start" },
        { regex: /.*/, token: "comment" }
    ],

    meta: {
        dontIndentStates: ["comment"],
        lineComment: "//"
    }
});



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
            theme: "darcula",
            mode: "simplemode"
        });
    }, 500
);



function setEditorTitle(txt) {

    document.getElementById("cm-editor-title").innerHTML = "&nbsp; code editor → " + txt;
}



setEditorTitle("empty");