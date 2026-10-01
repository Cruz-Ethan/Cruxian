import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class OptionNullTemplate extends Template {
    generateProblem() {
        const field = randomElement([
            'IntegerField',
            'DateField',
            'DateTimeField',
        ])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a(n) {field} that can be empty.</pre>,
            <code>models.{field}(blank=True, null=True)</code>
        )
    }
}