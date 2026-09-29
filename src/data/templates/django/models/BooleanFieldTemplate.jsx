import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class BooleanFieldTemplate extends Template {
    generateProblem() {
        const field = randomElement(['is_shiny', 'is_rare', 'is_new'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new field called "{field}" for a Card model.</pre>,
            <code>{field} = models.BooleanField(default=False)</code>
        )
    }
}