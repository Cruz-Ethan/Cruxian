import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class OptionDefaultTemplate extends Template {
    generateProblem() {
        const field = randomElement([
            {
                field: 'IntegerField',
                defaultValue: randomInteger(),
                otherOptions: ''
            },
            {
                field: 'CharField',
                defaultValue: '""',
                otherOptions: 'max_length=50, blank=True, '
            },
            {
                field: 'DecimalField',
                defaultValue: (randomInteger(0, 99) / 10).toFixed(1),
                otherOptions: 'max_digits=2, decimal_places=1, '
            },
        ])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a(n) {field.field} that defaults to {field.defaultValue}.</pre>,
            <code>models.{field.field}({field.otherOptions}default={field.defaultValue}, db_default={field.defaultValue})</code>
        )
    }
}