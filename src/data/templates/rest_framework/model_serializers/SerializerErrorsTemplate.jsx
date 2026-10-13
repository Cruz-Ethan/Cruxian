import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SerializerErrorsTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get the erros from data passed to the serializer 'serializer'.</pre>,
            <code>serializer.errors</code>
        )
    }
}