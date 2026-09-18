import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringEncodeTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Convert the string <code> str </code> to UTF-8 bytes.</pre>,
            <code>str.encode()</code>
        )
    }
}