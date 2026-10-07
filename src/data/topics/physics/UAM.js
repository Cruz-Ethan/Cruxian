import Topic from "../../../classes/Topic";
import MissingAccelerationTemplate from "../../templates/physics/UAM/MissingAccelerationTemplate";
import MissingDistanceTemplate from "../../templates/physics/UAM/MissingDistanceTemplate";
import MissingTimeTemplate from "../../templates/physics/UAM/MissingTimeTemplate";
import MissingVelocityTemplate from "../../templates/physics/UAM/MissingVelocityTemplate";

const tpcPhysicsUAM = new Topic("UAM")
export default tpcPhysicsUAM
tpcPhysicsUAM.addTemplate(new MissingAccelerationTemplate())
tpcPhysicsUAM.addTemplate(new MissingTimeTemplate())
tpcPhysicsUAM.addTemplate(new MissingDistanceTemplate())
tpcPhysicsUAM.addTemplate(new MissingVelocityTemplate())