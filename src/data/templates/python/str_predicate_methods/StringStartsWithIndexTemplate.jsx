import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class StringStartsWithIndexTemplate extends Template {
    generateProblem() {
        const prefix = "'" + randomLower() + randomLower() + randomLower() + "'"
        let startIndex
        let endIndex
        do {
            startIndex = randomInteger(-10, 10)
            endIndex = startIndex + randomInteger(0, 10)
        } while(startIndex * endIndex <= 0)

        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if the substring of <code> str </code> from index {startIndex} to {endIndex} begins with {prefix}.</pre>,
            <code>str.startswith({prefix}, {startIndex}, {endIndex})</code>
        )
    }
}