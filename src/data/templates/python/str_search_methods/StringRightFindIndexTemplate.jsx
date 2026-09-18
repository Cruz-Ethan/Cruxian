import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"
import randomStartEndIndex from "../../../utils/randomStartEndIndex.js"

export default class StringRightFindIndexTemplate extends Template {
    generateProblem() {
        const value = "'" + randomLower() + randomLower() + randomLower() + "'"
        const [startIndex, endIndex] = randomStartEndIndex()
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Find the index of the last occurence of {value} in string <code> str </code> between indices {startIndex} and {endIndex} without raising an exception.</pre>,
            <code>str.rfind({value}, {startIndex}, {endIndex})</code>
        )
    }
}