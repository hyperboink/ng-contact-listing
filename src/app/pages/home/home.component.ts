import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FormValidationService } from '../../services/form-validation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contacts = [];
  hasSubmitted: boolean = false;
  
  form = this.validate.form;

  constructor(private contactService: ContactService, private validate: FormValidationService) { }

  ngOnInit() { }

  submit(){

    this.hasSubmitted = true;

    if(this.form.valid){
      this.contactService[this.form.get('key').value ? 'update' : 'add'](this.form.value);
      this.reset();
    }

  }

  reset(){
    this.form.reset();
    this.hasSubmitted = false;
  }

}
