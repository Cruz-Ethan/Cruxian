import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DequeExtendLeftTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Add the items of iterable <code> iter </code> to the start of deque <code> dq </code>.</pre>,
            <code>dq.extendleft(iter)</code>
        )
    }
}