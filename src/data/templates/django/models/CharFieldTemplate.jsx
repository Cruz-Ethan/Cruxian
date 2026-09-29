import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class CharFieldTemplate extends Template {
    generateProblem() {
        const field = randomElement(['title', 'author', 'publisher'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new field called "{field}" for a Book model.</pre>,
            <code>{field} = models.CharField(max_length=50)</code>
        )
    }
}