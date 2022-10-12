import { LaunchStatus } from "./launchStatus.model";

export interface ILaunchDetail {
  slug: string;
  ismanned: boolean;
  image: string;
  name: string;
  launchDate: string;
  net: string;
  launchpad: string;
  agency: string;
  launchStatus: LaunchStatus
  launchStatusColor: string;
}
