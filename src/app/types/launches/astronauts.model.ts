export interface Astronaut {
  role: { role: string; priority: number };
  astronaut: {
    id: number;
    name: string;
    profile_image: string | null;
    launchStagesIncluded: string;
    status: config;
    type:config,
    date_of_birth:string,
    date_of_death:string | null,
    nationality:string,
    twitter:string| null,
    wiki:string | null,
    instagram:string | null,
    bio:string | null
  };
  crewGroup?: string[];
}

interface config {
  id: number;
  name: string;
}
