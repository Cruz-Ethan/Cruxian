import Subject from "../../classes/Subject.js"
import tpcPythonDictMethods from "../topics/python/dictMethods.js"
import tpcPythonListMethods from "../topics/python/listMethods.js"
import tpcPythonListOperations from "../topics/python/listOperations.js"
import tpcPythonSetMethods from "../topics/python/setMethods.js"
import tpcPythonStringModifierMethods from "../topics/python/stringModifierMethods.js"
import tpcPythonStringPredicateMethods from "../topics/python/stringPredicateMethods.js"
import tpcPythonStringReplaceMethods from "../topics/python/stringReplaceMethods.js"
import tpcPythonStringSearchMethods from "../topics/python/stringSearchMethods.js"

const sbjPython = new Subject("Python")
export default sbjPython
sbjPython.addTopic(tpcPythonStringPredicateMethods)
sbjPython.addTopic(tpcPythonStringModifierMethods)
sbjPython.addTopic(tpcPythonStringSearchMethods)
sbjPython.addTopic(tpcPythonStringReplaceMethods)
sbjPython.addTopic(tpcPythonListOperations)
sbjPython.addTopic(tpcPythonListMethods)
sbjPython.addTopic(tpcPythonSetMethods)
sbjPython.addTopic(tpcPythonDictMethods)