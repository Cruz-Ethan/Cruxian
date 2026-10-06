import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ManagerUpdateTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Update the object 'product' to add 10 more to its 'stock' field.</pre>,
            <code>product.update(stock=F('stock')+10)</code>
        )
    }
}