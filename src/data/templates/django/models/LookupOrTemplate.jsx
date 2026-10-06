import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class LookupOrTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get a queryset of blogs (Blog) with 1000+ views or that are subscribed to (is_subscribed).</pre>,
            <code>Blog.objects.filter(Q(views__gte=1000) | Q(is_subscribed=True))</code>
        )
    }
}