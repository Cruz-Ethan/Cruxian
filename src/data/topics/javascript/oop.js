import Topic from "../../../classes/Topic";
import ConstructorHeaderTemplate from "../../templates/javascript/oop/ConstructorHeaderTemplate";
import FunctionDefaultTemplate from "../../templates/javascript/oop/FunctionDefaultTemplate";
import FunctionRestTemplate from "../../templates/javascript/oop/FunctionRestTemplate";
import GetterHeaderTemplate from "../../templates/javascript/oop/GetterHeaderTemplate";
import InheritanceHeaderTemplate from "../../templates/javascript/oop/InheritanceHeaderTemplate";
import InstanceOfTemplate from "../../templates/javascript/oop/InstanceOfTemplate";
import MethodHeaderTemplate from "../../templates/javascript/oop/MethodHeaderTemplate";
import PrivateFieldTemplate from "../../templates/javascript/oop/PrivateAttributeTemplate";
import SetterHeaderTemplate from "../../templates/javascript/oop/SetterHeaderTemplate";
import StaticAttributeTemplate from "../../templates/javascript/oop/StaticAttributeTemplate";
import StaticMethodHeaderTemplate from "../../templates/javascript/oop/StaticMethodHeaderTemplate";
import SuperCallTemplate from "../../templates/javascript/oop/SuperCallTemplate";
import SuperMethodTemplate from "../../templates/javascript/oop/SuperMethodTemplate";
import SuperRuleTemplate from "../../templates/javascript/oop/SuperRuleTemplate";

const tpcJavaScriptOOP = new Topic("OOP")
export default tpcJavaScriptOOP
tpcJavaScriptOOP.addTemplate(new ConstructorHeaderTemplate())
tpcJavaScriptOOP.addTemplate(new GetterHeaderTemplate())
tpcJavaScriptOOP.addTemplate(new SetterHeaderTemplate())
tpcJavaScriptOOP.addTemplate(new InheritanceHeaderTemplate())
tpcJavaScriptOOP.addTemplate(new PrivateFieldTemplate())
tpcJavaScriptOOP.addTemplate(new SuperCallTemplate())
tpcJavaScriptOOP.addTemplate(new SuperRuleTemplate())
tpcJavaScriptOOP.addTemplate(new SuperMethodTemplate())
tpcJavaScriptOOP.addTemplate(new MethodHeaderTemplate())
tpcJavaScriptOOP.addTemplate(new StaticMethodHeaderTemplate())
tpcJavaScriptOOP.addTemplate(new StaticAttributeTemplate())
tpcJavaScriptOOP.addTemplate(new InstanceOfTemplate())
tpcJavaScriptOOP.addTemplate(new FunctionDefaultTemplate())
tpcJavaScriptOOP.addTemplate(new FunctionRestTemplate())