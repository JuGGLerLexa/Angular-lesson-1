import { Component, OnInit } from '@angular/core';
import {usersWithAddress} from "../dataUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = usersWithAddress
  constructor() { }

  ngOnInit(): void {
  }

}
