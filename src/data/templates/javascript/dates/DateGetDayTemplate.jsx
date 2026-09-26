import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DateGetDayTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get the day of the week (index) of Date "date".</pre>,
            <code>date.getDay()</code>
        )
    }
}