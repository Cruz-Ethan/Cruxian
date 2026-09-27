import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class DOMGetElementTemplate extends Template {
    generateProblem() {
        const ids = ['mainSection', 'sidebar', 'nav', 'header', 'title', 'content']
        const id = randomElement(ids)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return the element with id "{id}".</pre>,
            <code>document.getElementById('{id}')</code>
        )
    }
}