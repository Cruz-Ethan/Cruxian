import Topic from "../../../classes/Topic";
import MathAbsTemplate from "../../templates/javascript/math_methods/MathAbsTemplate";
import MathFloorTemplate from "../../templates/javascript/math_methods/MathFloorTemplate";
import MathRandomTemplate from "../../templates/javascript/math_methods/MathRandomTemplate";
import MathRoundTemplate from "../../templates/javascript/math_methods/MathRoundTemplate";
import MathTruncTemplate from "../../templates/javascript/math_methods/MathTruncTemplate";
import NumberIsIntegerTemplate from "../../templates/javascript/math_methods/NumberIsIntegerTemplate";
import NumberIsNaNTemplate from "../../templates/javascript/math_methods/NumberIsNaNTemplate";
import NumberNaNTemplate from "../../templates/javascript/math_methods/NumberNanTemplate";
import NumberParseFloatTemplate from "../../templates/javascript/math_methods/NumberParseFloatTemplate";
import NumberParseIntTemplate from "../../templates/javascript/math_methods/NumberParseIntTemplate";
import NumberParseInvalidTemplate from "../../templates/javascript/math_methods/NumberParseInvalidTemplate";
import NumberToFixedTemplate from "../../templates/javascript/math_methods/NumberToFixedTemplate";

const tpcJavaScriptMathMethods = new Topic('Math Methods')
export default tpcJavaScriptMathMethods
tpcJavaScriptMathMethods.addTemplate(new NumberIsIntegerTemplate())
tpcJavaScriptMathMethods.addTemplate(new NumberIsNaNTemplate())
tpcJavaScriptMathMethods.addTemplate(new NumberNaNTemplate())
tpcJavaScriptMathMethods.addTemplate(new NumberParseFloatTemplate())
tpcJavaScriptMathMethods.addTemplate(new NumberParseIntTemplate())
tpcJavaScriptMathMethods.addTemplate(new NumberParseInvalidTemplate())
tpcJavaScriptMathMethods.addTemplate(new NumberToFixedTemplate())
tpcJavaScriptMathMethods.addTemplate(new MathRoundTemplate())
tpcJavaScriptMathMethods.addTemplate(new MathTruncTemplate())
tpcJavaScriptMathMethods.addTemplate(new MathFloorTemplate())
tpcJavaScriptMathMethods.addTemplate(new MathAbsTemplate())
tpcJavaScriptMathMethods.addTemplate(new MathRandomTemplate())