import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SerializerValidationErrorTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What should you do if a serializer is not valid?</pre>,
            <code>serializers.ValidationError("Error message.")</code>
        )
    }
}