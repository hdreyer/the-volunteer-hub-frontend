import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../Services/authentication.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit() {}

  //Runs logout function
  logout() {
    this.authenticationService.logout();
  }
}
