import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringFormatMapTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Format an f-string-like string <code> str </code> with a dictionary <code> dct </code>.</pre>,
            <code>str.format_map(dct)</code>
        )
    }
}