import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringIsPrintableTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if all the characters in string <code> str </code> are printable.</pre>,
            <code>str.isprintable()</code>
        )
    }
}