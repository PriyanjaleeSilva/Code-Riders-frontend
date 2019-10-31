import { NgModule } from '@angular/core';
import {MatSelectModule ,MatFormFieldModule,MatAutocompleteModule,MatInputModule} from '@angular/material';

@NgModule({
    imports: [
        MatSelectModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatInputModule
      ],
      exports: [
        MatSelectModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatInputModule
      ]
})

export class MaterialModule{}