export default class Subject {
    #name
    #topics

    constructor(name) {
        this.#name = name
        this.#topics = []
    }

    get name() { return this.#name }
    get topics() { return this.#topics }

    addTopic(topic) {
        this.#topics.push(topic)
    }
}