import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class SerializerValidTemplate extends Template {
    generateProblem() {
        const raiseException = randomElement([true, false])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Validate the data passed to the serializer 'serializer'{raiseException ? ' and raise an exception if necessary' : ''}.</pre>,
            <code>serializer.is_valid({raiseException ? 'raise_exception=True' : ''})</code>
        )
    }
}