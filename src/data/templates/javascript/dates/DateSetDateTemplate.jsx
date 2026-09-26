import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class DateSetDateTemplate extends Template {
    generateProblem() {
        const date = randomInteger(1, 31)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Set the day of the month of Date "date" to {date}.</pre>,
            <code>date.setDate({date})</code>
        )
    }
}