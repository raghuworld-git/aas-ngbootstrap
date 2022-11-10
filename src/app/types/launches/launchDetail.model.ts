import { Astronaut } from "./astronauts.model";
import { LaunchPad } from "./launchPads.model";
import { LaunchServiceProvider } from "./launchServiceProvider.model";
import { LaunchStatus } from "./launchStatus.model";
import { LaunchUpdates } from "./launchUpdates.model";
import { Mission } from "./mission.model";
import { Rocket } from "./rocket.model";
import { VidURL } from "./videoURL.model";

export interface LaunchDetail {
  slug: string,
  ismanned: boolean,
  name: string,
  image: string,
  status: LaunchStatus,
  statusColor: string,
  updates: LaunchUpdates[],
  net: string,
  launch_service_provider: LaunchServiceProvider,
  rocket: Rocket,
  mission: Mission,
  customCrewMembers: Astronaut[],
  pad: LaunchPad,
  vidURLs: VidURL[],
  vidURLCustom: string | null,
  failreason: string | null,
  holdreason: string | null,
  isFailed:boolean,
  isHold:boolean,
  failHoldreason:string | null,
  isLaunchCompleted: boolean,
  launchDate: string

}
