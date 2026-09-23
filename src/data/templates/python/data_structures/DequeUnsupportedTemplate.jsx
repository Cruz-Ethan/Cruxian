import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DequeUnsupportedTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What list methods are unsupported for deque?</pre>,
            <code>pop(index) and sort()</code>
        )
    }
}