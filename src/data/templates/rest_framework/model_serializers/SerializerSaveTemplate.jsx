import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SerializerSaveTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Save the data in the serializer 'serializer' to the database.</pre>,
            <code>serializer.save()</code>
        )
    }
}