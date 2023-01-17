import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  unconfirm: EventEmitter<string> = new EventEmitter<string>();
  @Input() firstName: string;
  constructor() { }
  ngOnInit(): void {
  }
  confirm(loginData: NgForm) {
    console.warn("Address is confirmed", loginData)
    this.notify.emit("Address confirmed")
  }
  cancelData() {
    console.warn("Cancel done");
    this.unconfirm.emit("cancelled")
  }
}
