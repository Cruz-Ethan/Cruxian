import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class ArrayIncludesTemplate extends Template {
    generateProblem() {
        const num = randomInteger()
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if the {num} is in the array "arr".</pre>,
            <code>arr.includes({num})</code>
        )
    }
}