import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DOMInnerTextTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Set the text of "myElement" to 'Hello World!'.</pre>,
            <code>myElement.innerText = 'Hello World!'</code>
        )
    }
}