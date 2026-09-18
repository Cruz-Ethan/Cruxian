import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringIsTitleTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if the string <code> str </code> is in title case.</pre>,
            <code>str.istitle()</code>
        )
    }
}