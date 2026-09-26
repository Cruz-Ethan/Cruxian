import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class DateSetSecondsTemplate extends Template {
    generateProblem() {
        const seconds = randomInteger(0, 59)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Set the seconds of Date "date" to {seconds}.</pre>,
            <code>date.setSeconds({seconds})</code>
        )
    }
}