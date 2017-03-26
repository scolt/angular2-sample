import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

import { LoginService } from './login.service';
import { LoaderService } from '../../common/components/loaderBlock/loaderBlock.service';

export interface ICreds {
  username: string;
  password: string;
}

@Component({
  selector: 'login',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [ './login.component.scss' ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  model: ICreds = {
    username: '',
    password: ''
  };

  error: string;

  constructor(public loginService: LoginService, public loaderService: LoaderService) {}

  onSubmit(): void {
    this.loaderService.show();
    setTimeout(() => {
      this.loginService.login(this.model);
      this.loaderService.hide();
    }, 3000);
  };
}
