import { LaunchLocation } from "./launchLocation.model";

export interface LaunchPad {
        id:number,
        location: LaunchLocation,
        name:string,
        map_url:string | null,
        latitude:string | null,
        longitude:string | null,
        total_launch_count:number | null,
        orbital_launch_attempt_count:number | null
}
