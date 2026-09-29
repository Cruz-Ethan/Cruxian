import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ManyToManyFieldTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Course', 'Teacher'])
        const field = model.toLowerCase() + 's'
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new field called "{field}" (links to {model}) for a Student model.</pre>,
            <code>{field} = models.ManyToManyField({model}, related_name='students')</code>
        )
    }
}