import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ArrayPopTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Delete and return the end of the array "arr".</pre>,
            <code>arr.pop()</code>
        )
    }
}