import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class OptionAutoNowAddTemplate extends Template {
    generateProblem() {
        const field = randomElement([
            'DateField',
            'DateTimeField',
            'TimeField'
        ])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a {field} that records when the object was created.</pre>,
            <code>models.{field}(auto_now_add=True)</code>
        )
    }
}