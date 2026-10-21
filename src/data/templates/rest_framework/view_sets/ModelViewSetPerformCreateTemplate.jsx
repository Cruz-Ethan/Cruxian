import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ModelViewSetPerformCreateTemplate extends Template {
    generateProblem() {
        const model = randomElement(['Blog', 'Product', 'Book', 'Post'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">When creating a {model} object with {model}ViewSet, make sure to add user=user on creation.</pre>,
            <pre className="whitespace-pre-wrap break-words">{`def perform_create(self, serializer):
    serializer.save(user=self.request.user)`}</pre>
        )
    }
}