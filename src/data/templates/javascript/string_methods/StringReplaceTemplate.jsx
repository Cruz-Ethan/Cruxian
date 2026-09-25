import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class StringReplaceTemplate extends Template {
    generateProblem() {
        const substring = "'" + randomLower() + randomLower() + randomLower() + "'"
        const replacement =  "'" + randomLower() + randomLower() + randomLower() + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Replace the first occurence of {substring} with {replacement} in the string "str".</pre>,
            <code>str.replace({substring}, {replacement})</code>
        )
    }
}