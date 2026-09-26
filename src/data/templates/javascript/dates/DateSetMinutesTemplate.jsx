import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class DateSetMinutesTemplate extends Template {
    generateProblem() {
        const minutes = randomInteger(0, 59)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Set the minute of Date "date" to {minutes}.</pre>,
            <code>date.setMinutes({minutes})</code>
        )
    }
}