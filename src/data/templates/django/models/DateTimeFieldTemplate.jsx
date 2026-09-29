import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class DateTimeFieldTemplate extends Template {
    generateProblem() {
        const field = randomElement(['start_time', 'end_time'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new field called "{field}" for an Event model.</pre>,
            <code>{field} = models.DateTimeField()</code>
        )
    }
}