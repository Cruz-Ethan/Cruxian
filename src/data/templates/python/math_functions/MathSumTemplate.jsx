import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class MathSumTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Find the sum of values in iterable <code> iter </code>.</pre>,
            <code>sum(iter)</code>
        )
    }
}