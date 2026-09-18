import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class StringEndsWithTemplate extends Template {
    generateProblem() {
        const suffix = "'" + randomLower() + randomLower() + randomLower() + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if the string <code> str </code> ends with {suffix}.</pre>,
            <code>str.endswith({suffix})</code>
        )
    }
}