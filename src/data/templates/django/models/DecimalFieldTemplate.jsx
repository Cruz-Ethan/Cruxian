import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class DecimalFieldTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Post', 'Book', 'Song', 'Card'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new field called "rating" (3.29, 9.45, 8.72) for a {model} model.</pre>,
            <code>rating = models.DecimalField(max_digits=3, decimal_places=2)</code>
        )
    }
}