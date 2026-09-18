import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringIdentifierTestTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">When is a string an identifier?</pre>,
            <code>When the string is all letters, numbers, and underscores, and does not start with a number.</code>
        )
    }
}