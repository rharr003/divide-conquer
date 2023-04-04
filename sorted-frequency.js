
function first(arr, target) {

    let startIdx = 0
    let endIdx = arr.length

    while(startIdx < endIdx){
        let middleIdx = Math.floor((startIdx + endIdx) / 2)
        if(arr[middleIdx] > target) {
            endIdx = middleIdx - 1
        } else if(arr[middleIdx] < target){
            startIdx = middleIdx + 1
        } else if(arr[middleIdx] === target && arr[middleIdx - 1] !== target){
            return middleIdx
        } else {
            startIdx -= 1
        }

    }

    return -1


}

function last(arr, target) {

    let startIdx = 0
    let endIdx = arr.length

    while(startIdx < endIdx){
        let middleIdx = Math.floor((startIdx + endIdx) / 2)
        if(arr[middleIdx] > target) {
            endIdx = middleIdx - 1
        } else if(arr[middleIdx] < target){
            startIdx = middleIdx + 1
        } else if(arr[middleIdx] === target && arr[middleIdx + 1] !== target){
            return middleIdx
        } else {
            endIdx += 1
        }

    }

    return -1

}

function sortedFrequency(arr, target) {
    let firstIdx = first(arr, target)
    let lastIdx = last(arr, target)
    if(firstIdx === -1){
        return firstIdx
    } else {
        return lastIdx - firstIdx + 1
    }
    
}

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1

module.exports = sortedFrequency

