import { LaunchStatus } from "./launchStatus.model";
import { Mission } from "./mission.model";

export interface SimpleLaunch {
    slug:string;
    ismanned:boolean;
    image:string;
    name:string;
    launchDate:string;
    net:string;
    launchpad:string;
    agency:string;
    launchStatus:LaunchStatus
    launchStatusColor:string;
    mission:Mission;
}
