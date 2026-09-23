import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DequeRotateTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Rotate the deque <code> dq </code> once to the right.</pre>,
            <code>dq.rotate()</code>
        )
    }
}