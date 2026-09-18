import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class StringRightPartitionTemplate extends Template {
    generateProblem() {
        const separator = "'" + randomLower() + randomLower() + randomLower() + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Split the string <code> str </code> into a 3-element tuple with the last occurence of {separator}.</pre>,
            <code>str.rpartition({separator})</code>
        )
    }
}