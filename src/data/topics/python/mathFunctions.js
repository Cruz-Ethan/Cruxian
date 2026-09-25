import Topic from "../../../classes/Topic";
import MathAbsTemplate from "../../templates/python/math_functions/MathAbsTemplate";
import MathMaxTemplate from "../../templates/python/math_functions/MathMaxTemplate";
import MathMinTemplate from "../../templates/python/math_functions/MathMinTemplate";
import MathRoundTemplate from "../../templates/python/math_functions/MathRoundTemplate";
import MathSumTemplate from "../../templates/python/math_functions/MathSumTemplate";
import MathTruncTemplate from "../../templates/python/math_functions/MathTruncTemplate";

const tpcPythonMathFunctions = new Topic('Math Functions')
export default tpcPythonMathFunctions
tpcPythonMathFunctions.addTemplate(new MathSumTemplate())
tpcPythonMathFunctions.addTemplate(new MathAbsTemplate())
tpcPythonMathFunctions.addTemplate(new MathTruncTemplate())
tpcPythonMathFunctions.addTemplate(new MathRoundTemplate())
tpcPythonMathFunctions.addTemplate(new MathMinTemplate())
tpcPythonMathFunctions.addTemplate(new MathMaxTemplate())