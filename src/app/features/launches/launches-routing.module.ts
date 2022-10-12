import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LaunchesComponent } from "./components/launches/launches.component";


const routes: Routes = [
    {
        path: '', component: LaunchesComponent
    },
    {
        path: 'upcoming', component: LaunchesComponent
    },
    {
        path: 'previous', component: LaunchesComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LaunchesRoutingModule {

}