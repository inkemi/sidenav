import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolbarComponent, AppLayoutComponent]
})
export class LayoutModule { }
