import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class OptionRelatedNameNoneTemplate extends Template {
    generateProblem() {
        const field = randomElement(['ManyToManyField', 'ForeignKey', 'OneToOneField'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new {field} (links to Person) so that a Person object does not have reverse access.</pre>,
            <code>models.{field}(Person, on_delete=models.CASCADE, related_name='+')</code>
        )
    }
}