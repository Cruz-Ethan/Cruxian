import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DateGetMinutesTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get the minute of Date "date".</pre>,
            <code>date.getMinutes()</code>
        )
    }
}