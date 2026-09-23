import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class DefaultDictConstructorTemplate extends Template {
    generateProblem() {
        const classes = [
            {
                name: 'int',
                default: '0'
            },
            {
                name: 'float',
                default: '0.0'
            },
            {
                name: 'str',
                default: "''"
            },
            {
                name: 'bool',
                default: 'False'
            },
            {
                name: 'list',
                default: '[]'
            },
            {
                name: 'tuple',
                default: '()'
            },
            {
                name: 'dict',
                default: '{}'
            },
            {
                name: 'set',
                default: 'set()'
            },
        ]
        const classItem = randomElement(classes)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a dictionary that creates and returns {classItem.default} if a key is not found.</pre>,
            <code>defaultdict({classItem.name})</code>
        )
    }
}