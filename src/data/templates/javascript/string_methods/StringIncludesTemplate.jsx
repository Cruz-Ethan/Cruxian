import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class StringIncludesTemplate extends Template {
    generateProblem() {
        const substring = "'" + randomLower() + randomLower() + randomLower() + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if {substring} is a substring of the string "str".</pre>,
            <code>str.includes({substring})</code>
        )
    }
}