import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material/material.module';
import { NavigationComponent } from './components/navigation/navigation.component';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    NavigationComponent
  ]
})
export class SharedModule { }
