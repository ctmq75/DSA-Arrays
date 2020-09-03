const Memo = require("./memory");
const memory = new Memo();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error("Out of memory");
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length == 0) {
      throw new Error("index err");
    }
    const value = memory.get(this.ptr + this.length-1);
    this.legnth--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}

Array.SIZE_RATIO = 3;

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);
  arr.push(5);
  console.log(arr)
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  console.log(arr);
}

main();

const url = (str) => {
  let input = str.split("");
  return input.map((x) => (x === " " ? (x = "%20") : x)).join("");
};

console.log(url("tauhida parveen"));

const filter5 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

console.log(filter5([4, 5, 5]));

const largeSum = (arr, array = []) => {
  if (arr.length == 0) {
    return 1;
  }
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total += arr[i];
  }
  array.push(total);
  largeSum(arr.slice(1));
  return array;
};

console.log(largeSum([4, 6, -3, 5, -2, 1]));

const mergeArrays = (arr1, arr2) => {
  arr1.push(...arr2);
  return arr1.sort((a, b) => {
    return a - b;
  });
};

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

const removeChars = (str, charStr) => {
  let arr = str.split("");
  let control = charStr.split("");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < control.length; j++) {
      if (arr[i] === control[j]) {
        arr.splice(i, 1);
      }
    }
  }
  return array.join("");
};

console.log(removeChars("Battle of the Vowels: Hawaii vs. Grozny", "aeiou"));

const product = (arr) => {
  let newArray = [];
  let arrCopy = arr.slice();
  for (let i = 0; i < arrCopy.length; i++) {
    let loopArr = arr.slice();
    loopArr.splice(i, 1);
    newArr.push(loopArr.reduce((x, y) => x * y));
  }
  return newArray;
};

console.log(product([1, 3, 9, 4]));

function twoDArray(arr) {
    let arr2 = arr.map((a) => {
        return Array.from(a)
    })
    for(y=0; y<arr.length; y++) {
        for(x=0; x<arr[y].length; x++) {
            if(arr[y][x] === 0) {
                for(y2 = 0; y2<arr.length; y2++) {
                    arr2[y2][x] = 0
                }
                for(x2=0; x2<arr[y].length; x2++) {
                    arr2[y][x2] = 0
                }
            }
        }
    }
    console.log(arr);
}

console.log(
  twoDArr([
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);