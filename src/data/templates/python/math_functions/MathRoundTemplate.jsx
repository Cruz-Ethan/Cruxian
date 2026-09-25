import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class MathRoundTemplate extends Template {
    generateProblem() {
        const num = randomInteger(1, 1000000) / 10000
        const decimalPlaces = randomInteger(2, 4)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Round {num} to {decimalPlaces} decimal places.</pre>,
            <code>round({num}, {decimalPlaces})</code>
        )
    }
}