import Source from "./Source"

export default class Subject {
    #name
    #topics
    #sources

    constructor(name) {
        this.#name = name
        this.#topics = []
        this.#sources = []
    }

    get name() { return this.#name }
    get topics() { return this.#topics }
    get sources() { return this.#sources}

    addTopic(topic) {
        this.#topics.push(topic)
    }

    addSource(name, link) {
        this.#sources.push(
            new Source(name, link)
        )
    }
}