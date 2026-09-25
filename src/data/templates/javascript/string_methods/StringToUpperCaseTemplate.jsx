import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringToUpperCaseTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Convert all letters in the string "str" to uppercase.</pre>,
            <code>str.toUpperCase()</code>
        )
    }
}