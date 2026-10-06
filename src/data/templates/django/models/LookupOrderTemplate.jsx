import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class LookupOrderTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get a queryset of blogs (Blog) and sort them by pub_date descending and author ascending.</pre>,
            <code>Blog.objects.order_by('-pub_date', 'author')</code>
        )
    }
}