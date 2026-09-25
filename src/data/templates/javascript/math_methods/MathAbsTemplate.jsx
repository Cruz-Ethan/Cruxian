import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class MathAbsTemplate extends Template {
    generateProblem() {
        const num = randomInteger(-1000, 1000) / 100
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get the absolute value of {num}.</pre>,
            <code>Math.abs({num})</code>
        )
    }
}