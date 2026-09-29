import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ManagerAllTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Post', 'Student', 'Person', 'Book'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a queryset of all the objects in "{model}".</pre>,
            <code>{model}.objects.all()</code>
        )
    }
}