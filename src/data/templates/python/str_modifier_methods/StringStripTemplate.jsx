import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringStripTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Remove whitespace at the beginning and end of string <code> str </code>.</pre>,
            <code>str.strip()</code>
        )
    }
}