import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class TextFieldTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Post', 'Book', 'Song', 'Card'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new field called "description" for a {model} model.</pre>,
            <code>description = models.TextField()</code>
        )
    }
}