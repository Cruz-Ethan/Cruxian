import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class StringSliceEndTemplate extends Template {
    generateProblem() {
        const start = randomInteger(1, 20)
        const end = start + randomInteger(1, 20)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get the substring of "str" from index {start} to {end}.</pre>,
            <code>str.slice({start}, {end})</code>
        )
    }
}