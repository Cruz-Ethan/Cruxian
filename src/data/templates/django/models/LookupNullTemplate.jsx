import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class LookupNullTemplate extends Template {
    generateProblem() {
        const isNull = randomElement(['True', 'False'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get a queryset of blogs (Blog) that {isNull === 'True' ? "don't " : ''}have authors.</pre>,
            <code>Blog.objects.filter(author__isnull={isNull})</code>
        )
    }
}