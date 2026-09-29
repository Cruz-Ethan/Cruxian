import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ModelHeaderTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Post', 'Student', 'Person', 'Book'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write the header for a model called "{model}".</pre>,
            <code>class {model}(models.Model)</code>
        )
    }
}