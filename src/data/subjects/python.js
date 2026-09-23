import Subject from "../../classes/Subject.js"
import tpcPythonDataStructures from "../topics/python/dataStructures.js"
import tpcPythonDictMethods from "../topics/python/dictMethods.js"
import tpcPythonIterators from "../topics/python/iterators.js"
import tpcPythonListMethods from "../topics/python/listMethods.js"
import tpcPythonListOperations from "../topics/python/listOperations.js"
import tpcPythonSetMethods from "../topics/python/setMethods.js"
import tpcPythonStringMethods from "../topics/python/stringMethods.js"
import tpcPythonStringModifierMethods from "../topics/python/stringModifierMethods.js"
import tpcPythonStringPredicateMethods from "../topics/python/stringPredicateMethods.js"
import tpcPythonStringReplaceMethods from "../topics/python/stringReplaceMethods.js"
import tpcPythonStringSearchMethods from "../topics/python/stringSearchMethods.js"
import tpcPythonStringSplitMethods from "../topics/python/stringSplitMethods.js"

const sbjPython = new Subject("Python")
export default sbjPython
sbjPython.addTopic(tpcPythonStringPredicateMethods)
sbjPython.addTopic(tpcPythonStringModifierMethods)
sbjPython.addTopic(tpcPythonStringSearchMethods)
sbjPython.addTopic(tpcPythonStringReplaceMethods)
sbjPython.addTopic(tpcPythonStringSplitMethods)
sbjPython.addTopic(tpcPythonStringMethods)
sbjPython.addTopic(tpcPythonListOperations)
sbjPython.addTopic(tpcPythonListMethods)
sbjPython.addTopic(tpcPythonSetMethods)
sbjPython.addTopic(tpcPythonDictMethods)
sbjPython.addTopic(tpcPythonIterators)
sbjPython.addTopic(tpcPythonDataStructures)