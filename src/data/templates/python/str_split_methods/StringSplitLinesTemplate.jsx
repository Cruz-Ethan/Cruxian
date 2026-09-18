import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringSplitLinesTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Split the string <code> str </code> by linebreaks.</pre>,
            <code>str.splitlines()</code>
        )
    }
}