import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class SerializerInstantiateDataTemplate extends Template {
    generateProblem() {
        const hasInstance = randomElement([true, false])
        const isPartial = randomElement([hasInstance, false])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a BookSerializer object from data{hasInstance ? ` and book (partial=${isPartial})` : ''}.</pre>,
            <code>BookSerializer({hasInstance ? 'book, ' : ''}data=data{isPartial ? ', partial=True' : ''})</code>
        )
    }
}