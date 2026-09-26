import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class DateSetYearTemplate extends Template {
    generateProblem() {
        const year = randomInteger(2005, 2030)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Set the year of Date "date" to {year}.</pre>,
            <code>date.setFullYear({year})</code>
        )
    }
}