import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringRightStripTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Remove whitespace at the end of string <code> str </code>.</pre>,
            <code>str.rstrip()</code>
        )
    }
}