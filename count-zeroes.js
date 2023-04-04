function countZeroes(arr) {
    let startIdx = 0
    let endIdx = arr.length - 1
    while(startIdx <= endIdx){
        let middleIdx = Math.floor((startIdx + endIdx) / 2)
        if(arr[middleIdx] === 1) {
            startIdx = middleIdx + 1
        } else if(arr[middleIdx] === 0) {
            endIdx = middleIdx - 1
        }
    }

    return arr.length - startIdx
  
}

module.exports = countZeroes