import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm
  formSubmitted = false
  defaultOption = 'Basic'

  user = {
    email: '',
    subscriptions: '',
    password: ''
  }

  onSubmit(form: NgForm){
    console.log(this.form.value);
    this.formSubmitted = true
    this.user.email = this.form.value.email
    this.user.subscriptions = this.form.value.subscriptions
    this.user.password = this.form.value.password
    this.form.reset();
  }

}
