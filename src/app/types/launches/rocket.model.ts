import { Program } from "./program.model";
import { SpacecraftStage } from "./spacecraft_stage.model";

export interface Rocket {
    configuration:{
        description:string,
        full_name:string,
        name:string,
        program:Program
    },
    spacecraft_stage:SpacecraftStage,
}
