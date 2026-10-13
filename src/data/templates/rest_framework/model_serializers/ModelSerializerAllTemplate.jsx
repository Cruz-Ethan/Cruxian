import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ModelSerializerAllTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Blog', 'Product', 'Author', 'Book', 'Post', 'Card'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Serialize all fields in {model}Serializer.</pre>,
            <pre className="whitespace-pre-wrap break-words">{`class Meta:
    fields = '__all__'`}</pre>
        )
    }
}