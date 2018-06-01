import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [
    MatIconModule,
    MatSidenavModule
  ],
  declarations: []
})
export class MaterialModule { }
