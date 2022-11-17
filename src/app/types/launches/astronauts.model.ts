export interface Astronaut {
         role:{role:string,priority:number},
         astronaut : {
                id:number,
                name:string,
                profile_image:string | null,
                launchStagesIncluded:string
        },
         crewGroup?:string[],
}
