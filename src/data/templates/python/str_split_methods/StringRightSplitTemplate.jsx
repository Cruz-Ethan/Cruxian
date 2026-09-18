import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class StringRightSplitTemplate extends Template {
    generateProblem() {
        const separator = "'" + randomLower() + randomLower() + randomLower() + "'"
        const maxSplit = randomInteger(2, 10)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Split the string <code> str </code> by {separator} a maximum of {maxSplit} times from the right.</pre>,
            <code>str.rsplit({separator}, {maxSplit})</code>
        )
    }
}