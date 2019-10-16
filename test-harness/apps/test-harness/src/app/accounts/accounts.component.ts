import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-harness-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  primaryColor = 'pink';

  accounts = [
    {
      id: '1',
      title: 'Account One',
      details: 'This is a sample account',
      fundsAvailable: 20,
      approved: false,
    },
    {
      id: '2',
      title: 'Account Two',
      details: 'This is a sample account',
      fundsAvailable: 40,
      approved: false,
    },
    {
      id: '3',
      title: 'Account Three',
      details: 'This is a sample account',
      fundsAvailable: 100,
      approved: true,
    }
  ];

  selectedAccount;


  constructor() { }

  ngOnInit() {
  }

selectAccount(account) {
  this.selectedAccount = account;
}

cancel() {
  this.selectAccount(null);
}

}
