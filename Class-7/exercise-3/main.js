
function countTrue(arr){
    const arr = [true, false, true, false, true];
    const count = arr.filter(Boolean).length;

console.log(count);
  }
  
  countTrue([true, false, false, true, false])  //  ➞    2
  
  countTrue([false, false, false, false])  //  ➞    0
  
  countTrue([])   // ➞    0