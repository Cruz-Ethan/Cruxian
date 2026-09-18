import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringIsIdentifierTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if the string <code> str </code> can be a variable name.</pre>,
            <code>str.isidentifier()</code>
        )
    }
}