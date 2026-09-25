import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class MathFloorTemplate extends Template {
    generateProblem() {
        const num = randomInteger(1, 1000) / 100
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Round {num} down.</pre>,
            <code>Math.floor({num})</code>
        )
    }
}