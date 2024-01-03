function rotate(arr, num) {
    const rotatedArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      const newPosition = (i + num) % arr.length;
      rotatedArray[newPosition] = arr[i];
    }
  
    return rotatedArray;
  }


console.log(rotate([1,2,3], 2)) // [2,3,1]