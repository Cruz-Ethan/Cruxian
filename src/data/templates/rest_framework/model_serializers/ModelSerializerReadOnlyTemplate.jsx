import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ModelSerializerReadOnlyTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Blog', 'Book', 'Post', 'Card'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Mark the title field as read only in {model}Serializer.</pre>,
            <pre className="whitespace-pre-wrap break-words">{`class Meta:
    read_only_fields = ['title']`}</pre>
        )
    }
}