import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringLeftStripTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Remove whitespace at the beginning of string <code> str </code>.</pre>,
            <code>str.lstrip()</code>
        )
    }
}