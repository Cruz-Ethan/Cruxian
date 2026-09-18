import Topic from "../../../classes/Topic";
import tpcPythonStringModifierMethods from "./stringModifierMethods";
import tpcPythonStringPredicateMethods from "./stringPredicateMethods";
import tpcPythonStringReplaceMethods from "./stringReplaceMethods";
import tpcPythonStringSearchMethods from "./stringSearchMethods";
import tpcPythonStringSplitMethods from "./stringSplitMethods";

const tpcPythonStringMethods = new Topic("String Methods")
export default tpcPythonStringMethods
tpcPythonStringMethods.addTemplatesFromTopic(tpcPythonStringPredicateMethods)
tpcPythonStringMethods.addTemplatesFromTopic(tpcPythonStringModifierMethods)
tpcPythonStringMethods.addTemplatesFromTopic(tpcPythonStringSearchMethods)
tpcPythonStringMethods.addTemplatesFromTopic(tpcPythonStringReplaceMethods)
tpcPythonStringMethods.addTemplatesFromTopic(tpcPythonStringSplitMethods)