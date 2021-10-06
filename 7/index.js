const input = "Is text important ?";
const block = 3;

const texts = input.split("");
const blocks = Array.from({ length: block }, (_, i) => "");
const blockObj = {};

console.log(texts);
console.log(blocks);
texts.forEach((text, textKey) => {
  const textNum = textKey + 1;
  blocks.forEach((_, key) => {
    const blockKey = key;
    if (textNum % block === blockKey) {
      console.log(`Block ${blockKey} : ${text}`);
      blockObj[blockKey] = `${blockObj[blockKey] || ""}${text}`;
    }
  });
});

const newArr = [];
Object.keys(blockObj).forEach((key) => {
  newArr.push(blockObj[key]);
});

console.log("output :", newArr.join(""));
