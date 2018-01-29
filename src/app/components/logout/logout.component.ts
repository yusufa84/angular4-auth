import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  user: User = new User();
  constructor(private router:Router, private auth: AuthService) { }

  ngOnInit(): void {
    console.log("logout init");
    this.onLogout();
  };

  onLogout(): void {
    console.log("Calling logout now")
    const token = localStorage.getItem('token');
    if(token) {
      this.auth.logout(token)
      .then((user) => {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

}
