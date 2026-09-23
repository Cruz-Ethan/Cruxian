import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class IterRangeStepTemplate extends Template {
    generateProblem() {
        const stop = randomInteger(-10, 10)
        let start
        do {
            start = randomInteger(-10, 10)
        } while(start === stop)
        const step = randomInteger(1, 3) * (start < stop ? 1 : -1)

        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a sequence of numbers from {start} to {stop}, incrementing by {step}.</pre>,
            <code>range({start}, {stop}, {step})</code>
        )
    }
}