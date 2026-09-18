import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringCaseFoldTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Convert the unicode string <code> str </code> to all lowercase.</pre>,
            <code>str.casefold()</code>
        )
    }
}