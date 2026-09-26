import Topic from "../../../classes/Topic";
import FetchAsyncAwaitTemplate from "../../templates/javascript/promises/FetchAsyncAwaitTemplate";
import FetchCatchTemplate from "../../templates/javascript/promises/FetchCatchTemplate";
import FetchThenTemplate from "../../templates/javascript/promises/FetchThenTemplate";
import PromiseConstructorTemplate from "../../templates/javascript/promises/PromiseConstructorTemplate";

const tpcJavaScriptPromises = new Topic('Promises')
export default tpcJavaScriptPromises
tpcJavaScriptPromises.addTemplate(new PromiseConstructorTemplate())
tpcJavaScriptPromises.addTemplate(new FetchThenTemplate())
tpcJavaScriptPromises.addTemplate(new FetchCatchTemplate())
tpcJavaScriptPromises.addTemplate(new FetchAsyncAwaitTemplate())