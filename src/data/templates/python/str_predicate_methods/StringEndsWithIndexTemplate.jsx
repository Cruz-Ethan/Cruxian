import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class StringEndsWithIndexTemplate extends Template {
    generateProblem() {
        const suffix = "'" + randomLower() + randomLower() + randomLower() + "'"
        let startIndex
        let endIndex
        do {
            startIndex = randomInteger(-10, 10)
            endIndex = startIndex + randomInteger(0, 10)
        } while(startIndex * endIndex <= 0)

        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if the substring of <code> str </code> from index {startIndex} to {endIndex} ends with {suffix}.</pre>,
            <code>str.endswith({suffix}, {startIndex}, {endIndex})</code>
        )
    }
}