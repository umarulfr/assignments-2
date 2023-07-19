const arr = [47,47,48];
let average, sum = 0

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
average = sum/arr.length
console.log(average)