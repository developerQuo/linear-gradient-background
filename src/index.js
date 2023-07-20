const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const body = document.querySelector("body");
const button = document.querySelector("button");

const genRandomNumber = (excludeNum) => {
  let num = Math.floor(Math.random() * colors.length);

  if (excludeNum && excludeNum === num) {
    num = genRandomNumber(excludeNum);
  }

  return num;
};

const onChangeBg = () => {
  const num1 = genRandomNumber();
  const num2 = genRandomNumber(num1);

  body.style.background = `linear-gradient(90deg, ${colors[num1]}, ${colors[num2]})`;
};

button.addEventListener("click", onChangeBg);
