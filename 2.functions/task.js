// Задание 1
function getArrayParams(arr) {
  let min,max,sum = 0,avg = 0;
  if (arr.length === 1) {
    min = arr[0];
    max = arr[0];
    avg = arr[0];
  }
  for(let i = 0; i < arr.length; i += 1) {
    if (arr[i] > arr[i - 1]) {
      max = arr[i];
    }
    if (arr[i] < arr[i + 1]) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = sum / arr.length;

  return { min:min, max:max, avg:Number(avg.toFixed(2)) };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
   sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
   let max = 0;

   for (let i = 0; i < arrOfArr.length; i += 1) {
   let sum = func(arrOfArr[i]);
   if (sum > max)  max = sum;
   }
   
   return max;
}

// Задание 3
function worker2(arr) {
   let min = arr[0];
   let max = arr[0];
 
   for (let i = 0; i < arr.length; i += 1) {
     if (arr[i] < min) min = arr[i];
     if (arr[i] > max) max = arr[i];
   }
   
   return max - min;  
}
