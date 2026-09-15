import Subject from "../../classes/Subject.js"
import tpcPythonDictMethods from "../topics/python/dictMethods.js"
import tpcPythonListMethods from "../topics/python/listMethods.js"
import tpcPythonListOperations from "../topics/python/listOperations.js"
import tpcPythonSetMethods from "../topics/python/setMethods.js"

const sbjPython = new Subject("Python")
export default sbjPython
sbjPython.addTopic(tpcPythonListOperations)
sbjPython.addTopic(tpcPythonListMethods)
sbjPython.addTopic(tpcPythonSetMethods)
sbjPython.addTopic(tpcPythonDictMethods)