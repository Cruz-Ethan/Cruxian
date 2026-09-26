import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DateGetMonthTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get the month of Date "date".</pre>,
            <code>date.getMonth()</code>
        )
    }
}