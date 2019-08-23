import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  @Input() enableAction: boolean = false;

  contacts = [];
  isLoading = true;
  _contactService = this.contactService;
  private contactSubscription: Subscription;

  constructor(private contactService: ContactService) { }

  ngOnInit() {

    this.contactSubscription = this.contactService.get().subscribe(items => {

      this.isLoading = false;

      this.contacts = items.map(item => {
        return {
          key: item.key,
          ...item.payload.val()
        }
      });

    });

  }

  ngOnDestroy(){
    this.contactSubscription.unsubscribe();
  }

}
