import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"
import randomLower from "../../../utils/randomLower.js"

export default class OptionRelatedNameTemplate extends Template {
    generateProblem() {
        const field = randomElement(['ManyToManyField', 'ForeignKey', 'OneToOneField'])
        const relatedName = randomLower() + randomLower() + randomLower()
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new {field} (links to Person) so that person.{relatedName} can be called.</pre>,
            <code>models.{field}(Person, on_delete=models.CASCADE, related_name='{relatedName}')</code>
        )
    }
}