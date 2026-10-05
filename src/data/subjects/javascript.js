import Subject from "../../classes/Subject";
import tpcJavaScriptArrayMethods from "../topics/javascript/arrayMethods";
import tpcJavaScriptDates from "../topics/javascript/dateMethods";
import tpcJavaScriptDOM from "../topics/javascript/dom";
import tpcJavaScriptMathMethods from "../topics/javascript/mathMethods";
import tpcJavaScriptOOP from "../topics/javascript/oop";
import tpcJavaScriptPromises from "../topics/javascript/promises";
import tpcJavaScriptStringMethods from "../topics/javascript/stringMethods";

const sbjJavascript = new Subject('JavaScript')
export default sbjJavascript
sbjJavascript.addTopic(tpcJavaScriptArrayMethods)
sbjJavascript.addTopic(tpcJavaScriptStringMethods)
sbjJavascript.addTopic(tpcJavaScriptMathMethods)
sbjJavascript.addTopic(tpcJavaScriptDates)
sbjJavascript.addTopic(tpcJavaScriptPromises)
sbjJavascript.addTopic(tpcJavaScriptOOP)
sbjJavascript.addTopic(tpcJavaScriptDOM)

sbjJavascript.addSource("W3 Schools", "https://www.w3schools.com/js/")
sbjJavascript.addSource("Coding2GO", "https://www.youtube.com/@coding2go")