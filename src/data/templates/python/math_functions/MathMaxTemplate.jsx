import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class MathMaxTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Find the maximum value of iterable <code> iter </code>.</pre>,
            <code>max(iter)</code>
        )
    }
}