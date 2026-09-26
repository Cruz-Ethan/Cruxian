import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DateGetHoursTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get the hour of Date "date".</pre>,
            <code>date.getHours()</code>
        )
    }
}