import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringIsLowerTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if all the letters in string <code> str </code> are lowercase.</pre>,
            <code>str.islower()</code>
        )
    }
}