
var jeda = {};


/*
 * DOM nodes
 */

jeda.panelDIV = document.getElementById("panel");
jeda.mainDIV = document.getElementById("main");


/*
 * File loading functions
 */

jeda.loadJS = function(filename) {
    
    var fileref=document.createElement('script')
    fileref.setAttribute("type","text/javascript")
    fileref.setAttribute("src", filename)
    if (typeof fileref!="undefined")
        document.body.appendChild(fileref)
}

jeda.loadCSS = function(filename) {
    
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", filename)
    if (typeof fileref!="undefined")
        document.body.appendChild(fileref)
}



/*
 * board manipulation
 */

jeda.addBoard = function(name, html, cb, timeout) {

    if (jeda.mainDIV.lastChild) {
        jeda.mainDIV.lastChild.remove();
        jeda.mainDIV.lastChild.remove();
    }

    jeda.panelDIV.innerHTML += `
    <div
        id="panel_item_${name}"
        class="panel_item"
        style="font-style: normal; color: #999;"
        onclick="jeda.toggleVisibility(this,'${name}')">
            ${name}
    </div>
    `;

    jeda.mainDIV.innerHTML += `
    <div
        id="board_${name}"
        class="board_item"
        style="display: block;">
            <div class="board_item_title"><span class="board_item_title_text">${name}</span></div>
            <div class="board_item_content">${html}</div>
    </div><br>
    `;

    if (cb) setTimeout(cb, timeout || 0);
}

jeda.toggleVisibility = function(item, name) {
    var elem = document.getElementById("board_"+name);
    if (elem.style.display === "block") {
        elem.style.display = "none";
        item.style["font-style"] = "italic";
        item.style.color = "#777";
    } else {
        elem.style.display = "block";
        item.style["font-style"] = "normal";
        item.style.color = "#999";
    }
}