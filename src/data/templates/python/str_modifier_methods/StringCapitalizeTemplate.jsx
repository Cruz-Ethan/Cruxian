import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringCapitalizeTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Make the first character of the string <code> str </code> capital if it's a letter.</pre>,
            <code>str.capitalize()</code>
        )
    }
}