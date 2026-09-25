import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class StringCharAtTemplate extends Template {
    generateProblem() {
        const index = randomInteger()
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get the character of "str" at index {index}.</pre>,
            <code>str.charAt({index})</code>
        )
    }
}