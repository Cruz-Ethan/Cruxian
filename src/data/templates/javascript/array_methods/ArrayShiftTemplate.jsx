import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ArrayShiftTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Delete and return the start of the array "arr".</pre>,
            <code>arr.shift()</code>
        )
    }
}