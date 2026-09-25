import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringLengthTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return the size of the string "str".</pre>,
            <code>str.length</code>
        )
    }
}