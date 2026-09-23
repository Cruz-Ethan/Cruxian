import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DequePopLeftTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Delete and return the first item of the deque <code> dq </code>.</pre>,
            <code>dq.popleft()</code>
        )
    }
}