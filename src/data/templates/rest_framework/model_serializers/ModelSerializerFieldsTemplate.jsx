import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ModelSerializerFieldsTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Blog', 'Book', 'Post', 'Card'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Serialize only the id and title in {model}Serializer.</pre>,
            <pre className="whitespace-pre-wrap break-words">{`class Meta:
    fields = ['id', 'title']`}</pre>
        )
    }
}