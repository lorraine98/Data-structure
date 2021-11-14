function MyBinarySearch(arr, target) {
    let startIdx = 0;
    let endIdx = arr.length - 1;
    let midIdx;

    while (startIdx <= endIdx) {
        midIdx = Math.floor((startIdx + endIdx) / 2);
        if (target === arr[midIdx]) {
            return midIdx;
        }

        if (target < arr[midIdx]) {
            endIdx = midIdx - 1;
        }
        else {
            startIdx = midIdx + 1;
        }
    }
    return -1;
}