export default class MyQueue {
    constructor() {
        this.input = [];
        this.output = [];
        this.size = 0;
    }
    enque(val) {
        this.input.push(val);
        this.size++;
    }
    deque() {
        if (this.output.length === 0) {
            this.output = this.input.reverse();
            this.input = [];
        }
        this.size--;
        return this.output.pop();
    }
}
