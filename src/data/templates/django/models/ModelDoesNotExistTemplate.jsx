import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ModelDoesNotExistTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Post', 'Student', 'Person', 'Book'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call {model}.objects.get and no object is found?</pre>,
            <code>{model}.DoesNotExist</code>
        )
    }
}