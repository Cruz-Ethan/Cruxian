import Topic from "../../../classes/Topic";
import StringCharAtTemplate from "../../templates/javascript/string_methods/StringCharAtTemplate";
import StringIncludesTemplate from "../../templates/javascript/string_methods/StringIncludesTemplate";
import StringIndexOfTemplate from "../../templates/javascript/string_methods/StringIndexOfTemplate";
import StringLengthTemplate from "../../templates/javascript/string_methods/StringLengthTemplate";
import StringReplaceAllTemplate from "../../templates/javascript/string_methods/StringReplaceAllTemplate";
import StringReplaceTemplate from "../../templates/javascript/string_methods/StringReplaceTemplate";
import StringSliceEndTemplate from "../../templates/javascript/string_methods/StringSliceEndTemplate";
import StringSliceStartTemplate from "../../templates/javascript/string_methods/StringSliceStartTemplate";
import StringSplitTemplate from "../../templates/javascript/string_methods/StringSplitTemplate";
import StringToLowerCaseTemplate from "../../templates/javascript/string_methods/StringToLowerCaseTemplate";
import StringToUpperCaseTemplate from "../../templates/javascript/string_methods/StringToUpperCaseTemplate";
import StringTrimTemplate from "../../templates/javascript/string_methods/StringTrimTemplate";

const tpcJavaScriptStringMethods = new Topic('String Methods')
export default tpcJavaScriptStringMethods
tpcJavaScriptStringMethods.addTemplate(new StringLengthTemplate())
tpcJavaScriptStringMethods.addTemplate(new StringToUpperCaseTemplate())
tpcJavaScriptStringMethods.addTemplate(new StringToLowerCaseTemplate())
tpcJavaScriptStringMethods.addTemplate(new StringTrimTemplate())
tpcJavaScriptStringMethods.addTemplate(new StringSliceStartTemplate())
tpcJavaScriptStringMethods.addTemplate(new StringSliceEndTemplate())
tpcJavaScriptStringMethods.addTemplate(new StringSplitTemplate())
tpcJavaScriptStringMethods.addTemplate(new StringIncludesTemplate())
tpcJavaScriptStringMethods.addTemplate(new StringIndexOfTemplate())
tpcJavaScriptStringMethods.addTemplate(new StringReplaceTemplate())
tpcJavaScriptStringMethods.addTemplate(new StringReplaceAllTemplate())
tpcJavaScriptStringMethods.addTemplate(new StringCharAtTemplate())