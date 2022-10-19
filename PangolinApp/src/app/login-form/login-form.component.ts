import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    imageTitle!: string;
    imageUrl!: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.imageTitle = "Pangolin",
    this.imageUrl = "https://cdn.pixabay.com/photo/2020/03/12/21/14/pangolin-4926259_960_720.jpg"
  }

}
