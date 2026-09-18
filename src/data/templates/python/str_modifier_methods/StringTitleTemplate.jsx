import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringTitleTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Convert the string <code> str </code> to titlecase.</pre>,
            <code>str.title()</code>
        )
    }
}