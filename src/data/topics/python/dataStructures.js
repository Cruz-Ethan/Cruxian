import Topic from "../../../classes/Topic";
import CounterImportTemplate from "../../templates/python/data_structures/CounterImportTemplate";
import CounterIterableTemplate from "../../templates/python/data_structures/CounterIterableTemplate";
import CounterKwargsTemplate from "../../templates/python/data_structures/CounterKwargsTemplate";
import CounterMissingTemplate from "../../templates/python/data_structures/CounterMissingTemplate";
import DefaultDictConstructorTemplate from "../../templates/python/data_structures/DefaultDictConstructorTemplate";
import DefaultDictImportTemplate from "../../templates/python/data_structures/DefaultDictImportTemplate";
import DequeAppendLeftTemplate from "../../templates/python/data_structures/DequeAppendLeftTemplate";
import DequeExtendLeftTemplate from "../../templates/python/data_structures/DequeExtendLeftTemplate";
import DequeImportTemplate from "../../templates/python/data_structures/DequeImportTemplate";
import DequePopLeftTemplate from "../../templates/python/data_structures/DequePopLeftTemplate";
import DequeRotateTemplate from "../../templates/python/data_structures/DequeRotateTemplate";
import DequeRotateValueTemplate from "../../templates/python/data_structures/DequeRotateValueTemplate";
import DequeUnsupportedTemplate from "../../templates/python/data_structures/DequeUnsupportedTemplate";
import HeapHeapifyMaxTemplate from "../../templates/python/data_structures/HeapHeapifyMaxTemplate";
import HeapHeapifyTemplate from "../../templates/python/data_structures/HeapHeapifyTemplate";
import HeapImportTemplate from "../../templates/python/data_structures/HeapImportTemplate";
import HeapMergeTemplate from "../../templates/python/data_structures/HeapMergeTemplate";
import HeapNLargestTemplate from "../../templates/python/data_structures/HeapNLargestTemplate";
import HeapNSmallestTemplate from "../../templates/python/data_structures/HeapNSmallestTemplate";
import HeapPopErrorTemplate from "../../templates/python/data_structures/HeapPopErrorTemplate";
import HeapPopTemplate from "../../templates/python/data_structures/HeapPopTemplate";
import HeapPushPopTemplate from "../../templates/python/data_structures/HeapPushPopTemplate";
import HeapPushTemplate from "../../templates/python/data_structures/HeapPushTemplate";
import HeapReplaceTemplate from "../../templates/python/data_structures/HeapReplaceTemplate";
import NamedTupleAdvantagesTemplate from "../../templates/python/data_structures/NamedTupleAdvantagesTemplate";
import NamedTupleClassTemplate from "../../templates/python/data_structures/NamedTupleClassTemplate";
import NamedTupleImportTemplate from "../../templates/python/data_structures/NamedTupleImportTemplate";
import NamedTupleObjectTemplate from "../../templates/python/data_structures/NamedTupleObjectTemplate";

const tpcPythonDataStructures = new Topic("Data Structures")
export default tpcPythonDataStructures

tpcPythonDataStructures.addTemplate(new HeapImportTemplate())
tpcPythonDataStructures.addTemplate(new HeapHeapifyTemplate())
tpcPythonDataStructures.addTemplate(new HeapHeapifyMaxTemplate())
tpcPythonDataStructures.addTemplate(new HeapPushTemplate())
tpcPythonDataStructures.addTemplate(new HeapPopTemplate())
tpcPythonDataStructures.addTemplate(new HeapPopErrorTemplate())
tpcPythonDataStructures.addTemplate(new HeapPushPopTemplate())
tpcPythonDataStructures.addTemplate(new HeapReplaceTemplate())
tpcPythonDataStructures.addTemplate(new HeapNLargestTemplate())
tpcPythonDataStructures.addTemplate(new HeapNSmallestTemplate())
tpcPythonDataStructures.addTemplate(new HeapMergeTemplate())

tpcPythonDataStructures.addTemplate(new DefaultDictImportTemplate())
tpcPythonDataStructures.addTemplate(new DefaultDictConstructorTemplate())

tpcPythonDataStructures.addTemplate(new DequeImportTemplate())
tpcPythonDataStructures.addTemplate(new DequeUnsupportedTemplate())
tpcPythonDataStructures.addTemplate(new DequeAppendLeftTemplate())
tpcPythonDataStructures.addTemplate(new DequePopLeftTemplate())
tpcPythonDataStructures.addTemplate(new DequeExtendLeftTemplate())
tpcPythonDataStructures.addTemplate(new DequeRotateTemplate())
tpcPythonDataStructures.addTemplate(new DequeRotateValueTemplate())

tpcPythonDataStructures.addTemplate(new NamedTupleImportTemplate())
tpcPythonDataStructures.addTemplate(new NamedTupleClassTemplate())
tpcPythonDataStructures.addTemplate(new NamedTupleObjectTemplate())
tpcPythonDataStructures.addTemplate(new NamedTupleAdvantagesTemplate())

tpcPythonDataStructures.addTemplate(new CounterImportTemplate())
tpcPythonDataStructures.addTemplate(new CounterIterableTemplate())
tpcPythonDataStructures.addTemplate(new CounterKwargsTemplate())
tpcPythonDataStructures.addTemplate(new CounterMissingTemplate())