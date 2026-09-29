import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"
import randomLower from "../../../utils/randomLower.js"

export default class ManagerFilterTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Student', 'Person', 'Card'])
        const name = "'" + randomLower() + randomLower() + randomLower() + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return the queryset of all the objects in "{model}" with name={name}.</pre>,
            <code>{model}.objects.filter(name={name})</code>
        )
    }
}