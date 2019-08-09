import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contacts = [];
  hasSubmitted: boolean = false;
  
  form = this.contactService.form;

  constructor(private contactService: ContactService) { }

  ngOnInit() { }

  submit(){

    this.hasSubmitted = true;

    if(this.contactService.form.valid){
      this.contactService[this.form.get('key').value ? 'update' : 'add'](this.form.value);
      this.form.reset();
      this.hasSubmitted = false;
    }

  }

  reset(){
    this.form.reset();
    this.hasSubmitted = false;
  }

}
