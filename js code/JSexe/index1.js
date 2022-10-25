let text2 = "shahar";
let text = "Amanaplanacanalpanama";
text = text.toLowerCase();

let palindrom = (str) => {
  let array = str.split("").reverse().join("");
  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] != str[i]) {
      return false;
    }
  }
  return true;
};
let txt = palindrom(text);
console.log(txt);
txt = palindrom(text2);
console.log(txt);
