import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class OptionBlankTemplate extends Template {
    generateProblem() {
        const field = randomElement([
            {
                field: 'TextField',
                otherOptions: ''
            },
            {
                field: 'CharField',
                otherOptions: 'max_length=50, '
            },
        ])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a {field.field} that can be an empty string.</pre>,
            <code>models.{field.field}({field.otherOptions}blank=True)</code>
        )
    }
}