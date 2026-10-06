import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ValidatorCustomTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a custom validator 'validate_adult' for validating age ('value') is greater than or equal to 18.</pre>,
            <pre className="whitespace-pre-wrap break-words">
                {
                    `from django.core.exceptions import ValidationError

def validate_adult(value):
    if value < 18:
        raise new ValidationError('Not yet an adult!')`
                }
            </pre>
        )
    }
}