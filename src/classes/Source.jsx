import { Link } from "react-router-dom"

export default class Source {
    #name
    #link

    constructor(name, link) {
        this.#name = name
        this.#link = link
    }

    getJSX(key) {
        return <Link to={this.#link} key={key} target="_blank" className="text-purple-500 hover:text-purple-700 transition duration-200 block">{this.#name}</Link>
    }
}