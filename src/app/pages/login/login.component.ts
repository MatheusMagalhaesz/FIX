import { Component } from '@angular/core';
import { LoginScreenComponent } from '../../components/login-screen/login-screen.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginScreenComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
