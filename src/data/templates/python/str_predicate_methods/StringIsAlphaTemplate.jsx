import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringIsAlphaTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if the string <code> str </code> is all letters.</pre>,
            <code>str.isalpha()</code>
        )
    }
}