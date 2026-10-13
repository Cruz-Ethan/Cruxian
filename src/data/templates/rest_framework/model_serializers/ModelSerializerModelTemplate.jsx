import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ModelSerializerModelTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Blog', 'Product', 'Author', 'Book', 'Post', 'Card'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Use the {model} model in {model}Serializer.</pre>,
            <pre className="whitespace-pre-wrap break-words">{`class Meta:
    model = ${model}`}</pre>
        )
    }
}