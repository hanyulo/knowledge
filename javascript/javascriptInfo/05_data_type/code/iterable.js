let range = {
  from: 0,
  to: 5,
  current: null,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current <= this.to) {
      return {
        done: false,
        value: this.current++,
      }
    } else {
      return {
        done: true,
      }
    }
  },
}


for (let i of range) {
  console.log(i);
}
