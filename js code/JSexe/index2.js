let nums = [2, 4, 1, 2, 1];

let apears1 = (nums1) => {
  let sortarray = nums1.sort();
  let founded = [];
  for (let i = 0; i < sortarray.length; i++) {
    if (sortarray[i] != sortarray[i + 1] && sortarray[i] != sortarray[i - 1]) {
      founded.push(sortarray[i]);
      return founded;
    }
  }
};
let check = apears1(nums);
console.log(check);
