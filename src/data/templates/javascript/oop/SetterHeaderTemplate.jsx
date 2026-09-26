import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetterHeaderTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write the header for a method to set the name attribute.</pre>,
            <code>set name(value)</code>
        )
    }
}