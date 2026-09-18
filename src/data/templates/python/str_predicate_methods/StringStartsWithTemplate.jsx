import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class StringStartsWithTemplate extends Template {
    generateProblem() {
        const prefix = "'" + randomLower() + randomLower() + randomLower() + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if the string <code> str </code> begins with {prefix}.</pre>,
            <code>str.startswith({prefix})</code>
        )
    }
}