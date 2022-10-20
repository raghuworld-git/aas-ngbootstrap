import { LaunchStatus } from "./launchStatus.model";

export interface LaunchDetail {
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
