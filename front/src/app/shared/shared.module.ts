import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import './rxjs';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: []
})
export class SharedModule { }
