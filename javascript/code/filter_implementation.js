Array.prototype.myFilter = function(callBack) {
  const theArray = this;
  const resArray = [];
  for(let i = 0 ; i < theArray.length ; i++) {
    const res = callBack(theArray[i]);
    if (res) {
      resArray.push(theArray[i]);
    }
  }
  return resArray;
}


const res = [1,2,3,4,5,6,7,8,9,10].myFilter((value) => {
  return value > 5;
})

console.log(res);
