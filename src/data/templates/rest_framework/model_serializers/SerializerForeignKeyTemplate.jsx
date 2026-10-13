import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SerializerForeignKeyTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Add a read only field for books in AuthorSerializer (with BookSerializer and source kwarg).</pre>,
            <code>books = BookSerializer(many=True, source='books', read_only=True)</code>
        )
    }
}