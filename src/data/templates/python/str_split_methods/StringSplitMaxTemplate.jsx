import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class StringSplitMaxTemplate extends Template {
    generateProblem() {
        const separator = "'" + randomLower() + randomLower() + randomLower() + "'"
        const maxSplit = randomInteger(2, 10)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Split the string <code> str </code> by {separator} a maximum of {maxSplit} times.</pre>,
            <code>str.split({separator}, {maxSplit})</code>
        )
    }
}