import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DonutComponent } from './donut/donut.component';
import { DevsComponent } from './devs/devs.component';
import { DonutDetailsComponent } from './donut-details/donut-details.component';
import { DevsDetailsComponent } from './devs-details/devs-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';


const appRoutes = [
  {path:'donut', component: DonutComponent},
  {path:'donut/:id', component: DonutDetailsComponent},
  {path: '', redirectTo: '/donut', pathMatch: 'full'},
  {path: 'devs', component: DevsComponent},
  {path: 'devs/:id', component: DevsDetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    DonutComponent,
    DevsComponent,
    DonutDetailsComponent,
    DevsDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes), NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
