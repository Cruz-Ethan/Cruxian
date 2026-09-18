import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class StringSplitSeparatorTemplate extends Template {
    generateProblem() {
        const separator = "'" + randomLower() + randomLower() + randomLower() + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Split the string <code> str </code> by {separator}.</pre>,
            <code>str.split({separator})</code>
        )
    }
}