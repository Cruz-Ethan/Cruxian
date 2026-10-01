import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class OptionRelatedNameDefaultTemplate extends Template {
    generateProblem() {
        const field = randomElement([
            {
                name: 'OneToOneField',
                defaultName: 'author',
                book: 'book'
            },
            {
                name: 'ForeignKey',
                defaultName: 'author_set',
                book: 'books'
            },
            {
                name: 'ManyToManyField',
                defaultName: 'author_set',
                book: 'books'
            },
        ])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">For {field.book} = models.{field.name}("Author"...), what is the default related name?</pre>,
            <code>{field.defaultName}</code>
        )
    }
}