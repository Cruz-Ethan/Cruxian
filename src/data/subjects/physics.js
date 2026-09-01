import Subject from "../../classes/Subject.js"
import Topic from "../../classes/Topic.js"

const sbjPhysics = new Subject("Physics")
export default sbjPhysics

const tpcUAM = new Topic("UAM")
sbjPhysics.addTopic(tpcUAM)

const tpcForce = new Topic("Force")
sbjPhysics.addTopic(tpcForce)