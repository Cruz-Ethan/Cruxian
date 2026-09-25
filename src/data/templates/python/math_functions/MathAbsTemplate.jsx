import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class MathAbsTemplate extends Template {
    generateProblem() {
        const num = randomInteger(-10, 10)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Find the absolute value of {num}.</pre>,
            <code>abs({num})</code>
        )
    }
}