import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class AggregateAverageTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return this object &#123; 'avg_price': 7.23 &#125; from the Product model.</pre>,
            <code>Product.objects.aggregate(avg_price=Avg('price'))</code>
        )
    }
}