import Subject from "../../classes/Subject";
import tpcJavaScriptArrayMethods from "../topics/javascript/arrayMethods";
import tpcJavaScriptMathMethods from "../topics/javascript/mathMethods";
import tpcJavaScriptStringMethods from "../topics/javascript/stringMethods";

const sbjJavascript = new Subject('JavaScript')
export default sbjJavascript
sbjJavascript.addTopic(tpcJavaScriptArrayMethods)
sbjJavascript.addTopic(tpcJavaScriptStringMethods)
sbjJavascript.addTopic(tpcJavaScriptMathMethods)