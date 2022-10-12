import { Orbit } from "./orbit.model";

export interface Mission {
  name: string;
  description: string;
  type: string;
  orbit:Orbit
}
