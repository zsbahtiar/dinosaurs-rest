import fs from "fs";

/**
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns array[]
 */
const merge = (arr1 = [], arr2 = []) => {
  let result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0].name < arr2[0].name) result.push(arr1.shift());
    else result.push(arr2.shift());
  }

  return result.concat(arr1.slice().concat(arr2.slice()));
};

/**
 *
 * @param {*} arr
 * @returns  array
 */
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2),
    left = mergeSort(arr.slice(0, middle)),
    right = mergeSort(arr.slice(middle));

  return merge(left, right);
};

/**
 *
 * @param {*} arr
 * @returns array
 */
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].name < arr[j].name) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

/**
 *
 * @param {*} arr
 * @param {*} type
 * @returns array
 */
export const _sort = (arr, type) => {
  if (arr.length <= 1) return arr; // return arr when length <= 1
  let result;
  if (type === "asc") {
    result = mergeSort(arr); // using merge sort when asc
  } else if (type === "desc") {
    result = bubbleSort(arr); // using bubble sort when desc
  } else {
    return arr;
  }

  fs.writeFile("results.json", JSON.stringify(result), "utf8", function (err) {
    if (err) {
      console.log(`File failed to save: ${err}`);
    } else {
      console.log(`File has been saved on results.json, open on /json/results`);
    }
  });

  return result;
};
