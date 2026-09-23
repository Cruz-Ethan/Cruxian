import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterEnumerateTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return (index, value) pairs for iterable <code> iter </code>.</pre>,
            <code>enumerate(iter)</code>
        )
    }
}