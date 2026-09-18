export default class Topic {
    #name
    #templates

    constructor(name) {
        this.#name = name
        this.#templates = []
    }

    get name() { return this.#name }

    addTemplate(template) {
        this.#templates.push(template)
    }

    addTemplatesFromTopic(topic) {
        topic.#templates.forEach(template => this.addTemplate(template))
    }

    getRandomTemplate() {
        if(!this.#templates) {
            throw new Error(`The topic ${this.#name} doesn't have any templates.`)
        }

        const length = this.#templates.length
        const randomIndex = Math.trunc(Math.random() * length)
        const template = this.#templates[randomIndex]
        return template
    }
}