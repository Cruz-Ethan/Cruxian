import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringTrimTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Remove whitespace from the ends of the string "str".</pre>,
            <code>str.trim()</code>
        )
    }
}