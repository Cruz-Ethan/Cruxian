import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class MathTruncTemplate extends Template {
    generateProblem() {
        const num = randomInteger(-10000, 10000) / 1000
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Round {num} toward 0.</pre>,
            <code>math.trunc({num})</code>
        )
    }
}