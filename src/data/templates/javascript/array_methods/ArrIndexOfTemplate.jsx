import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class ArrayIndexOfTemplate extends Template {
    generateProblem() {
        const num = randomInteger()
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return the first index of {num} in the array "arr" or return -1.</pre>,
            <code>arr.indexOf({num})</code>
        )
    }
}