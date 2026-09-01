export default class Problem {
    #question
    #answer

    constructor(question, answer) {
        this.#question = question
        this.#answer = answer
    }

    get question() { return this.#question }
    get answer() { return this.#answer }
}