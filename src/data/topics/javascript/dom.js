import Topic from "../../../classes/Topic";
import AddEventListenerTemplate from "../../templates/javascript/dom/AddEventListenerTemplate";
import ClassListAddTemplate from "../../templates/javascript/dom/ClassListAddTemplate";
import ClassListRemoveTemplate from "../../templates/javascript/dom/ClassListRemoveTemplate";
import ClassListToggleTemplate from "../../templates/javascript/dom/ClassListToggleTemplate";
import DOMCreateElementTemplate from "../../templates/javascript/dom/DOMCreateElementTemplate";
import DOMGetElementTemplate from "../../templates/javascript/dom/DOMGetElementTemplate";
import DOMInnerTextTemplate from "../../templates/javascript/dom/DOMInnerTextTemplate";
import SearchParamsConstructorTemplate from "../../templates/javascript/dom/SearchParamsConstructorTemplate";
import SearchParamsGetTemplate from "../../templates/javascript/dom/SearchParamsGetTemplate";
import WindowRedirectTemplate from "../../templates/javascript/dom/WindowRedirectTemplate";

const tpcJavaScriptDOM = new Topic("DOM")
export default tpcJavaScriptDOM
tpcJavaScriptDOM.addTemplate(new WindowRedirectTemplate())
tpcJavaScriptDOM.addTemplate(new SearchParamsConstructorTemplate())
tpcJavaScriptDOM.addTemplate(new SearchParamsGetTemplate())
tpcJavaScriptDOM.addTemplate(new DOMCreateElementTemplate())
tpcJavaScriptDOM.addTemplate(new DOMInnerTextTemplate())
tpcJavaScriptDOM.addTemplate(new DOMGetElementTemplate())
tpcJavaScriptDOM.addTemplate(new ClassListAddTemplate())
tpcJavaScriptDOM.addTemplate(new ClassListRemoveTemplate())
tpcJavaScriptDOM.addTemplate(new ClassListToggleTemplate())
tpcJavaScriptDOM.addTemplate(new AddEventListenerTemplate())