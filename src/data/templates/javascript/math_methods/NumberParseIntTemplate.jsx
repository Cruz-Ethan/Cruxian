import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class NumberParseIntTemplate extends Template {
    generateProblem() {
        const numString = "'" + randomInteger(1, 100) + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Convert the {numString} to an integer.</pre>,
            <code>Number.parseInt({numString})</code>
        )
    }
}