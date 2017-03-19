import {
  Component
} from '@angular/core';

import { LoginService } from './login.service';

export interface ICreds {
  username: string;
  password: string;
}

@Component({
  selector: 'login',
  providers: [],
  styleUrls: [ './login.component.scss' ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  model: ICreds = {
    username: '',
    password: ''
  };

  error: string;

  constructor(public loginService: LoginService) {}

  onSubmit(): void {
    this.loginService.login(this.model);
  };
}
