import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class ArrayUnshiftTemplate extends Template {
    generateProblem() {
        const num = randomInteger()
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Add {num} to the start of the array "arr".</pre>,
            <code>arr.unshift({num})</code>
        )
    }
}