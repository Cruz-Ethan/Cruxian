import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class NumberParseInvalidTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call Number.parseInt or Number.parseFloat with an invalid string?</pre>,
            <code>It parses until the first invalid character. If the first character is invalid, NaN is returned.</code>
        )
    }
}