import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule {}
