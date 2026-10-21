import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ModelViewSetQuerysetTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Blog', 'Product', 'Book', 'Post'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Filter {model}ViewSet's queryset so that only objects with user=user are shown.</pre>,
            <pre className="whitespace-pre-wrap break-words">{`def get_queryset(self):
    return ${model}.objects.filter(user=self.request.user)`}</pre>
        )
    }
}