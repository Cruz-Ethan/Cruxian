import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class LookupGreaterTemplate extends Template {
    generateProblem() {
        const isEqual = randomElement(['e', ''])
        const length = randomInteger(10, 100)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get a queryset of blogs (Blog) with the title longer than {isEqual === 'e' ? 'or equal to ' : ''}{length} characters.</pre>,
            <code>Blog.objects.filter(title__length__gt{isEqual}={length})</code>
        )
    }
}