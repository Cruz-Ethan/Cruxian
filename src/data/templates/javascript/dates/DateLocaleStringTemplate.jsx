import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DateLocaleStringTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a string of the Date "date" in local time.</pre>,
            <code>date.toLocaleString()</code>
        )
    }
}