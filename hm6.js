
for (var elem of document.body.children)
    console.log(elem.tagName)
for (var elem of document.body.children)
    elem.tagName === "SCRIPT" ? null : elem.style.backgroundColor = "red"

