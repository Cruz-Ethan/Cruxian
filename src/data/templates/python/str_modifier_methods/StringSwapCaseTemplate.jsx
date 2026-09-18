import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringSwapCaseTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Convert all letters in the string <code> str </code> to uppercase if lowercase and vice versa.</pre>,
            <code>str.swapcase()</code>
        )
    }
}