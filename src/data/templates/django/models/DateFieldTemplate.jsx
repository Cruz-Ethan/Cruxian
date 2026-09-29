import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class DateFieldTemplate extends Template {
    generateProblem() {
        const field = randomElement(['release_date', 'pub_date'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new field called "{field}" for a Song model.</pre>,
            <code>{field} = models.DateField()</code>
        )
    }
}