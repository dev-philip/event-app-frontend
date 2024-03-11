import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
  ]
})
export class SharedModule { }