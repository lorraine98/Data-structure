import MyHeap from "./MyHeap.js"

const arr = [3, 2, 5, 3, 2, 9, 1]

const heap = new MyHeap()

arr.forEach(num => {
    heap.push(num)
})
while (heap.size() > 0) {
    console.log(heap.pop());
}
console.log(heap)