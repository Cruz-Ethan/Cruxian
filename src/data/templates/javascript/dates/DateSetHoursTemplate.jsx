import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class DateSetHoursTemplate extends Template {
    generateProblem() {
        const hour = randomInteger(0, 23)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Set the hour of Date "date" to {hour}.</pre>,
            <code>date.setHours({hour})</code>
        )
    }
}