import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class NumberToFixedTemplate extends Template {
    generateProblem() {
        const decimalPlaces = randomInteger(0, 3)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Convert "num" to a string rounded to {decimalPlaces} decimal place{decimalPlaces === 1 ? '' : 's'}.</pre>,
            <code>num.toFixed({decimalPlaces ? decimalPlaces : ''})</code>
        )
    }
}