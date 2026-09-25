import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class ArraySliceTemplate extends Template {
    generateProblem() {
        const start = randomInteger()
        const end = randomInteger() + start
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get the subarray from index {start} to index {end} of the array "arr".</pre>,
            <code>arr.push({start}, {end})</code>
        )
    }
}