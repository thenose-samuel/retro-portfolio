import { createBootText } from "./utils.js";

const setBootText = (value) => {
  document.getElementsByClassName("boot-text")[0].innerText = value;
};

function sleep(timeout) {
  return new Promise((r) => setTimeout(r, timeout));
}

const DELAY = 3000; //milliseconds

const bootTextElement = document.getElementsByClassName("boot-text");

const stopDotAnimation = (val) => {
  for (let i = 1; i <= 3; i++) {
    document.getElementsByClassName(`dot${i}`)[0].style.animation = `${
      val === true ? "none" : `visibility${i} 1s linear infinite`
    }`;
  }
};

const displayBootText = async () => {
  setBootText("CONSUMING MILO.DLL");
  await sleep(1000);
  stopDotAnimation(true);
  const mainNode = document.getElementsByClassName("main")[0];
  mainNode.append(createBootText("INSTALLING PORTFOLIO.EXE"));
  stopDotAnimation(false);
  await sleep(2000);
  mainNode.append(createBootText("APPLYING THEME v1.1"));
  await sleep(2500);
  mainNode.append(createBootText("CHECKING UPDATES"));
  await sleep(1000);
  mainNode.append(createBootText("PRESS SPACE TO CONTINUE"));
};
// start of the script

setTimeout(() => {
  displayBootText();
}, DELAY);
