const arr = [9,2,4,1,5,2,9,1,2,0];
printArray(arr);
arr.sort(descending);
printArray(arr);
console.log(arr);
function descending (a,b) {
return (a<b)-(a>b);
}
function printArray(arr){
    console.log('======');
    for (let i=0; i < arr.length; i++){
        console.log(arr[i]);
    }
    console.log('=====');
}

