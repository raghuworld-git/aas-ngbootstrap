import { APOD } from "@models/apod/apod.model";
import { SimpleLaunch } from "@models/launches/SimpleLaunch.model";

export interface dashboard {
  upcomingLaunch: SimpleLaunch | null;
  apod: APOD | null;
}
