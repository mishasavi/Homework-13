const arr = [9,2,4,1,5,2,9,1,2,0];
printArray(arr);
sort(arr);
printArray(arr);
console.log(arr);
function sort(arr) {
    let changed;
    do {
        changed = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                changed = true;
            }
        }
    } while (changed);
}
function printArray(arr){
    console.log('======');
    for (let i=0; i < arr.length; i++){
        console.log(arr[i]);
    }
    console.log('=====');
}