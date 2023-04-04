function findFloor(arr, target) {

    let start = 0
    let end = arr.length

    while(start <= end) {
        let middleIdx = Math.floor((start + end) /2)
        if(arr[middleIdx] > target){
            end = middleIdx - 1
        } else if(arr[middleIdx + 1] > target || middleIdx + 1 === arr.length ){
            return arr[middleIdx]
        } else {
            start = middleIdx + 1
        }

    }

    return - 1
  
}

module.exports = findFloor


console.log(findFloor([1,2,8,10,10,12,19], 9))
console.log(findFloor([1,2,8,10,10,12,19], 20))
console.log(findFloor([1,2,8,10,10,12,19], 0))
