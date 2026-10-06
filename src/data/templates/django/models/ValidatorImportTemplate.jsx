import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ValidatorImportTemplate extends Template {
    generateProblem() {
        const validator = randomElement([
            'MinLengthValidator', 'MinValueValidator', 'MaxValueValidator'
        ])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Import {validator} from Django.</pre>,
            <code>from django.core.validators import {validator}</code>
        )
    }
}