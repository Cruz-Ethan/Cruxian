import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class DequeAppendLeftTemplate extends Template {
    generateProblem() {
        const item = randomInteger()
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Add {item} to the start of the deque <code> dq </code>.</pre>,
            <code>dq.appendleft({item})</code>
        )
    }
}