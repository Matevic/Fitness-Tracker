import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from '../DemoNgZorroAntdModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,

  ],
  exports:[
    CommonModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
  
  ],
  providers: [provideHttpClient()]
})
export class SharedModule { }
