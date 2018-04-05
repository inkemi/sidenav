import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [ToolbarComponent, AppLayoutComponent],
  exports: [ToolbarComponent, AppLayoutComponent]
})
export class LayoutModule { }
