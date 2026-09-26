import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DateConstructorWhichTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">When is a new date parsed as UTC?</pre>,
            <code>Date-only ISO strings are parsed as UTC, as well as date-time strings ending with Z (zero offset).</code>
        )
    }
}