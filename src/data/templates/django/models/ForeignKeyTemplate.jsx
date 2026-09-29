import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ForeignKeyTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Character', 'Type', 'Rarity'])
        const field = model.toLowerCase()
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new field called "{field}" (links to {model}) for a Card model.</pre>,
            <code>{field} = models.ForeignKey({model}, on_delete=models.CASCADE, related_name='cards')</code>
        )
    }
}