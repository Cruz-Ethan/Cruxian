import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class IterRangeTemplate extends Template {
    generateProblem() {
        const stop = randomInteger(3, 10)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a sequence of numbers from 0 to {stop}.</pre>,
            <code>range({stop})</code>
        )
    }
}