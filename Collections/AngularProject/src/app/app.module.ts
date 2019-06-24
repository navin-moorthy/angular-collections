import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material.module";
import { AppComponent } from "./app.component";
import {
  DashboardComponent,
  DialogOverviewExampleDialog
} from "./dashboard/dashboard.component";
import { IssueService } from "./issue.service";

@NgModule({
  declarations: [AppComponent, DashboardComponent, DialogOverviewExampleDialog],
  entryComponents: [DialogOverviewExampleDialog],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule {}
