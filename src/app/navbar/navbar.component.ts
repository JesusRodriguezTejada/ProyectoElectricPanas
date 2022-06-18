import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dataUser: any;
  userName: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) { 

  }

  ngOnInit(): void {
    this.afAuth.currentUser.then( user => {
      if(user) {
        this.dataUser = user;
        this.userName = this.dataUser.email;
      }
    })
  }

  logOut() {
    this.userName = '';
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }


}
