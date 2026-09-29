import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class ManagerGetTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Post', 'Student', 'Person', 'Book'])
        const pk = randomInteger(1, 100)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return the object in "{model}" with pk={pk}.</pre>,
            <code>{model}.objects.get(pk={pk})</code>
        )
    }
}