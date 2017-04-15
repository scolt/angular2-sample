import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

import { UserService } from '../../common/services/user.service';
import { LoaderService } from '../../common/components/loaderBlock/loaderBlock.service';

export interface ICreds {
  login: string;
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
    login: '',
    password: ''
  };

  error: string;

  constructor(public userService: UserService, public loaderService: LoaderService) {}

  onSubmit(): void {
    this.loaderService.show();
    setTimeout(() => {
      this.userService.login(this.model);
      this.loaderService.hide();
    }, 3000);
  };
}
