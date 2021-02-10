import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(formValue: any) {
    this.userService.login(formValue.email, formValue.password).subscribe(
      result => {
        console.log(result);
        const datos = JSON.stringify({ email: formValue.email, token: result });
        localStorage.setItem('current-user', datos);
      },
      error => alert('Error al loguearse:' + error)
    );
  }
}
