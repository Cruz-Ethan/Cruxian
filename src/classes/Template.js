export default class Template {
    #imageUrl

    constructor() {
        this.#imageUrl = null
    }

    get imageUrl() { return this.#imageUrl }
    set imageUrl(imageUrl) { this.#imageUrl = imageUrl }

    generateProblem() {
        throw new Error("Templates must implement this method.")
    }
}