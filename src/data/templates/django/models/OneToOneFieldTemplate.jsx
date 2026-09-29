import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class OneToOneFieldTemplate extends Template {
    generateProblem() {
        const model = randomElement(['License', 'Account', 'Passport'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new field called "person" (links to Person) for a {model} model.</pre>,
            <code>person = models.OneToOneField(Person, on_delete=models.CASCADE)</code>
        )
    }
}