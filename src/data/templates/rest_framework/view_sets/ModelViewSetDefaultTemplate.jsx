import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ModelViewSetDefaultTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Blog', 'Product', 'Author', 'Book', 'Post', 'Card'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Define a basic ModelViewSet for {model}.</pre>,
            <pre className="whitespace-pre-wrap break-words">{`class ${model}ViewSet(viewsets.ModelViewSet):
    queryset = ${model}.objects.all()
    serializer_class = ${model}Serializer`}</pre>
        )
    }
}