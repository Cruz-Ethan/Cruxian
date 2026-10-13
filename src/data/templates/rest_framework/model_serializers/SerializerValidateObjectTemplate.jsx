import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SerializerValidateObjectTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write the header and return statement to validate the serializer.</pre>,
            <pre className="whitespace-pre-wrap break-words">{`def validate(self, data):
    return data`}</pre>
        )
    }
}