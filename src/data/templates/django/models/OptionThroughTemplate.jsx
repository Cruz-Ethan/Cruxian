import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class OptionThroughTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new ManyToManyField (links to Person) that has extra information about the relationship in the model Membership.</pre>,
            <code>models.ManyToManyField(Person, through='Membership')</code>
        )
    }
}