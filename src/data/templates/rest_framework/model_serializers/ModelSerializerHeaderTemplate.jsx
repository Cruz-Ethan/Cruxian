import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ModelSerializerHeaderTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Blog', 'Product', 'Author', 'Book', 'Post', 'Card'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write the header for {model}Serializer.</pre>,
            <pre className="whitespace-pre-wrap break-words">class {model}Serializer(serializers.ModelSerializer)</pre>
        )
    }
}