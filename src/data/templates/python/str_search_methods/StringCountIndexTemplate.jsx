import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"
import randomStartEndIndex from "../../../utils/randomStartEndIndex.js"

export default class StringCountIndexTemplate extends Template {
    generateProblem() {
        const value = "'" + randomLower() + randomLower() + randomLower() + "'"
        const [startIndex, endIndex] = randomStartEndIndex()
        
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Find the amount of non-overlapping occurences of {value} in string <code> str </code> between indices {startIndex} and {endIndex}.</pre>,
            <code>str.count({value}, {startIndex}, {endIndex})</code>
        )
    }
}