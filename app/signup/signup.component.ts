import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data: string = '';
  isconfirmClicked: boolean = false;
  isCancelClicked: boolean = false;
  submit(login: any) {
    console.warn("Form submitted", login)
  }

  ngOnInit(): void {
  }
  childData: string = '';
  addUnconfirmed: string = '';

  parentMethod(newData: string) {
    this.addUnconfirmed = '';
    this.isconfirmClicked = true;
    if (this.isconfirmClicked) {
      this.childData = newData;
    }
  }
  cancelMethod(newData: string) {
    this.childData = '';
    this.isCancelClicked = true;
    if (this.isCancelClicked) {
      this.addUnconfirmed = newData;
    }
  }
}

