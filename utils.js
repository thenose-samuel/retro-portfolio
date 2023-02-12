const createBootText = (document, text) => {
  const node = document.createElement("div");
  const textNode = document.createTextNode(text);
  node.appendChild(textNode);
  const loaders = document.getElementsByClassName("loaders")[0];
  node.appendChild(loaders);
  return node;
};

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    const screenNode = document.getElementById("screen");
    const navBar = document.getElementById("taskbar");
    let top = screenNode.offsetTop;
    let left = screenNode.offsetLeft;
    let right = screenNode.offsetWidth + left;
    let bottom = screenNode.offsetHeight + top;
    // console.log(top, left, right, bottom);
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    console.log(elmnt.offsetTop, screenNode.offsetHeight);
    if (
      elmnt.offsetTop - pos2 > top + navBar.offsetHeight &&
      elmnt.offsetTop - pos2 + elmnt.offsetHeight < bottom &&
      elmnt.offsetLeft - pos1 + elmnt.offsetWidth < right &&
      elmnt.offsetLeft - pos1 > left
    ) {
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

export { createBootText, dragElement };
