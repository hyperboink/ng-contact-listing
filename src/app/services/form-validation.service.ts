import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  form = new FormGroup({
    key: new FormControl(null),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern("^[0-9]*$")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    dob: new FormControl('', Validators.required)
  });

  constructor() { }

}
