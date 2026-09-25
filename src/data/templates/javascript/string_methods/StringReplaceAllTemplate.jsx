import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class StringReplaceAllTemplate extends Template {
    generateProblem() {
        const substring = "'" + randomLower() + randomLower() + randomLower() + "'"
        const replacement =  "'" + randomLower() + randomLower() + randomLower() + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Replace the all occurences of {substring} with {replacement} in the string "str".</pre>,
            <code>str.replaceAll({substring}, {replacement})</code>
        )
    }
}