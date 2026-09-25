import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class MathMinTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Find the minimum of x and y.</pre>,
            <code>min(x, y)</code>
        )
    }
}