function findRotationCount(arr) {
    return findIndexOfRotation(arr) + 1
  
}


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


findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0

module.exports = findRotationCount