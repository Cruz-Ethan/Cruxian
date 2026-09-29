import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class AggregateImportTemplate extends Template {
    generateProblem() {
        const aggregateFunction = randomElement(['Count', 'Sum', 'Avg', 'Max', "Min"])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Import {aggregateFunction} from Django.</pre>,
            <code>from django.db.models import {aggregateFunction}</code>
        )
    }
}