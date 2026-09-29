import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class AggregateCountTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return this object &#123; 'num_people': 5 &#125; from the Person model.</pre>,
            <code>Person.objects.aggregate(num_people=Count('id'))</code>
        )
    }
}