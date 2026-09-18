import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringSplitTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Split the string <code> str </code> by whitespaces.</pre>,
            <code>str.split()</code>
        )
    }
}