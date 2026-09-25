import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringToLowerCaseTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Convert all letters in the string "str" to lowercase.</pre>,
            <code>str.toLowerCase()</code>
        )
    }
}