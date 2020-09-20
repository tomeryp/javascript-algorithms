export default class Stack {
  constructor() {
    this.capacity = 50;
    this.data = new Array(this.capacity);
    this.index = 0;
  }

  push(item) {
    this.data[this.index++] = item;
    if (this.index === this.capacity) {
      this.capacity = this.capacity*2;
      const data = this.data;
      this.data = new Array(this.capacity);
      for (let i = 0; i < data.length; i++) {
        this.data[i] = data[i];
      }
    }
  }

  peek() {
    return this.isEmpty() ? null : this.data[this.index-1];
  }

  pop() {
    return this.isEmpty() ? null : this.data[--this.index];
  }

  toString(func = x => x) {
    let str = "";
    for (let i = 0; i < this.index; i++) {
      str = func(this.data[i]) + "," + str;
    }
    return str.slice(0,-1);
  }

  isEmpty() {
    return this.index === 0;
  }

  toArray() {
    // return [...this.data].reverse();
    return this.data.slice(0, this.index).reverse();
  }
}
