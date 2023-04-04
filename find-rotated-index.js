

function findIndexOfRotation(arr){
    let start = 0
    let end = arr.length

    while(start < end) {
        let middleIdx = Math.floor((start + end) /2)
        if(arr[middleIdx] > arr[middleIdx + 1]){
            return middleIdx
        } else if(arr[middleIdx] < arr[middleIdx - 1]){
            return middleIdx - 1
        } else if(arr[middleIdx] < arr[arr.length -1]) {
            end = middleIdx - 1
        } else {
            start = middleIdx + 1
        }
    }

    return - 1

}

function binarySearch2(arr, target){
    let startIdx = 0
    let endIdx = arr.length -1
    while(startIdx <= endIdx){
        let middleIdx = Math.floor((startIdx + endIdx) / 2)
        if(arr[middleIdx] < target) {
            startIdx = middleIdx + 1
        } else if(arr[middleIdx] > target) {
            endIdx = middleIdx -1
        } else {
            return middleIdx
        }
    }

    return - 1 
}

function findRotatedIndex(arr, target){
    const indexOfRotation = findIndexOfRotation(arr)
    const arr1 = arr.slice(0, indexOfRotation + 1)
    const arr2 = arr.slice(indexOfRotation)
    const idx1 = binarySearch2(arr1, target)
    const idx2 = binarySearch2(arr2, target)
    // console.log(idx1, idx2, indexOfRotation)
    if(idx1 === -1 && idx2 === -1){
        return -1
    } else {
        return idx1 === -1 ? idx2 + arr1.length - 1 : idx1cd
    }
    

}

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

module.exports = findRotatedIndex