const createBootText = (document, text) => {
  const node = document.createElement("div");
  const textNode = document.createTextNode(text);
  node.appendChild(textNode);
  const loaders = document.getElementsByClassName("loaders")[0];
  node.appendChild(loaders);
  return node;
};

export { createBootText };
