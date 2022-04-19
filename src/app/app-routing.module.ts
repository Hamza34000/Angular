import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";
import { UserComponent } from "./user/user.component";

const ROUTES: Routes = [
    {
        path: 'home', component: UserComponent,
    },
    {
        path: 'todos', component: TodoComponent
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: 'home'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}