import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ModelTextChoicesValueTemplate extends Template {
    generateProblem() {
        const example = randomElement([
            {
                choices: 'ShirtSize',
                dbValue: '"L"',
                readableValue: '"Large"'
            },
            {
                choices: 'SchoolYear',
                dbValue: '"FR"',
                readableValue: '"Freshman"'
            },
            {
                choices: 'Suit',
                dbValue: '3',
                readableValue: '"Hearts"'
            }
        ])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write the choice ({example.dbValue}, {example.readableValue}) for the enum {example.choices}.</pre>,
            <code>{example.readableValue.toUpperCase().slice(1, -1)} = {example.dbValue}, _({example.readableValue})</code>
        )
    }
}