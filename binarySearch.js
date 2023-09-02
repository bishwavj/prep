function binarySearch(array, low, high, key){
        if(low> high){
                return -1;
        }

        let mid = low+ (high-low/2);
        console.log("mid", mid);
        if(array[mid] == key){
                return mid;
        }else if(array[mid]> key){
                return binarySearch(array, low, mid-1, key);
        }else{
                return binarySearch(array, mid+1, high, key);
        }
}
let key = 11;
let sortedArray = [2,4,6,8,9,10,11,12,15,20];
let arraylength = sortedArray.length-1;
let position = binarySearch(sortedArray, 0, arraylength, key);
console.log("Position of:", key, "is", position);