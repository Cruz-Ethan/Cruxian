import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class DequeRotateValueTemplate extends Template {
    generateProblem() {
        const rotations = randomInteger(-10, 10)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Rotate the deque <code> dq </code> {Math.abs(rotations)} times to the {rotations < 0 ? 'left' : 'right'}.</pre>,
            <code>dq.rotate({rotations})</code>
        )
    }
}