import Subject from "../../classes/Subject";
import tpcJavaScriptArrayMethods from "../topics/javascript/arrayMethods";
import tpcJavaScriptStringMethods from "../topics/javascript/stringMethods";

const sbjJavascript = new Subject('JavaScript')
export default sbjJavascript
sbjJavascript.addTopic(tpcJavaScriptArrayMethods)
sbjJavascript.addTopic(tpcJavaScriptStringMethods)