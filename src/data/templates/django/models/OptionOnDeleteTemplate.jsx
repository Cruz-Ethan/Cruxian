import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class OptionOnDeleteTemplate extends Template {
    generateProblem() {
        const value = randomElement([
            {
                option: 'CASCADE',
                description: 'deletes this object'
            },
            {
                option: 'PROTECT',
                description: 'raises a ProtectedError'
            },
            {
                option: 'RESTRICT',
                description: 'raises a RestrictedError'
            },
            {
                option: 'SET_NULL',
                description: 'sets this field to null'
            },
            {
                option: 'SET_DEFAULT',
                description: 'sets this field to the default option'
            },
        ])
        const field = randomElement(['OneToOneField', 'ForeignKey'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new {field} (links to Person) that {value.description} if this field is deleted.</pre>,
            <code>models.{field}(Person, on_delete=models.{value.option})</code>
        )
    }
}