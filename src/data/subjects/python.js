import Subject from "../../classes/Subject.js"
import tpcPythonDictMethods from "../topics/python/dictMethods.js"
import tpcPythonListMethods from "../topics/python/listMethods.js"
import tpcPythonListOperations from "../topics/python/listOperations.js"
import tpcPythonSetMethods from "../topics/python/setMethods.js"
import tpcPythonStringModifierMethods from "../topics/python/stringModifierMethods.js"
import tpcStringPredicateMethods from "../topics/python/stringPredicateMethods.js"
import tpcPythonStringSearchMethods from "../topics/python/stringSearchMethods.js"

const sbjPython = new Subject("Python")
export default sbjPython
sbjPython.addTopic(tpcStringPredicateMethods)
sbjPython.addTopic(tpcPythonStringModifierMethods)
sbjPython.addTopic(tpcPythonStringSearchMethods)
sbjPython.addTopic(tpcPythonListOperations)
sbjPython.addTopic(tpcPythonListMethods)
sbjPython.addTopic(tpcPythonSetMethods)
sbjPython.addTopic(tpcPythonDictMethods)