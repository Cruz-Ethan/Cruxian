import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ModelTextChoicesTemplate extends Template {
    generateProblem() {
        const choice = randomElement([
            'ShirtSize',
            'SchoolYear',
            'Suit',
        ])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write the class header for a choices enum "{choice}".</pre>,
            <code>class {choice}(models.TextChoices)</code>
        )
    }
}