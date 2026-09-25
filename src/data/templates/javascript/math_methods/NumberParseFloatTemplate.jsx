import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class NumberParseFloatTemplate extends Template {
    generateProblem() {
        const numString = "'" + randomInteger(1, 10000) / 100 + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Convert the {numString} to a float.</pre>,
            <code>Number.parseFloat({numString})</code>
        )
    }
}