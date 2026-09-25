import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class StringIndexOfTemplate extends Template {
    generateProblem() {
        const substring = "'" + randomLower() + randomLower() + randomLower() + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Find the index first occurence of {substring} in the string "str" or return -1 if not found.</pre>,
            <code>str.indexOf({substring})</code>
        )
    }
}