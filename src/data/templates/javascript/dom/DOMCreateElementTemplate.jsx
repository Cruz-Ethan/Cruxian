import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class DOMCreateElementTemplate extends Template {
    generateProblem() {
        const elements = [
            {
                abbreviation: 'li',
                name: 'list element'
            },
            {
                abbreviation: 'p',
                name: 'paragraph tag'
            },
            {
                abbreviation: 'h1',
                name: 'header 1'
            },
            {
                abbreviation: 'ul',
                name: 'unordered list'
            },
            {
                abbreviation: 'button',
                name: 'button element'
            },
            {
                abbreviation: 'div',
                name: 'div element'
            },
        ]
        const element = randomElement(elements)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new HTML {element.name}, add it to the "mainSection" element, and assign it to "myElement".</pre>,
            <code>const myElement = mainSection.appendChild(document.createElement('{element.abbreviation}'))</code>
        )
    }
}