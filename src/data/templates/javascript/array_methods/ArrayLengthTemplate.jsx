import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ArrayLengthTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return the number of elements in the array "arr".</pre>,
            <code>arr.length</code>
        )
    }
}