import { Astronaut } from "./astronauts.model";

export interface SpacecraftStage {
    destination:string,
    launch_crew :Astronaut[],
    onboard_crew : Astronaut[],
    landing_crew : Astronaut[],
    spacecraft: {
        id:number,
        name:string,
    }
}
