import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringIsAlnumTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if the string <code> str </code> is all letters and numbers.</pre>,
            <code>str.isalnum()</code>
        )
    }
}