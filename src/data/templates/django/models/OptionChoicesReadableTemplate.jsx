import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class OptionChoicesReadableTemplate extends Template {
    generateProblem() {
        const example = randomElement([
            {
                modelObject: 'person',
                fieldName: 'shirt_size',
            },
            {
                modelObject: 'student',
                fieldName: 'school_year',
            },
            {
                modelObject: 'card',
                fieldName: 'suit',
            },
        ])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get the readable value of {example.fieldName} (field with choices) in {example.modelObject}.</pre>,
            <code>{example.modelObject}.get_{example.fieldName}_display()</code>
        )
    }
}