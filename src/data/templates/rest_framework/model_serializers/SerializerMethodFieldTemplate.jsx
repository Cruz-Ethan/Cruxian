import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SerializerMethodFieldTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write a custom field is_published for a serializer.</pre>,
            <code>is_published = serializers.SerializerMethodField()</code>
        )
    }
}