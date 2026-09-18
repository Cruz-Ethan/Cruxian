import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringTitleTestTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">When is a string in title case?</pre>,
            <code>When the first letter of each word is uppercase, and the rest are lowercase.</code>
        )
    }
}