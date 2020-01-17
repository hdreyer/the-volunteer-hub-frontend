import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Organizations } from '../../model/organizations';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {
  organization: Organizations[];
  organ: Organizations;
  _url: string = 'http://localhost:3001/getOrgs';
  _url_specific: string = 'http://localhost:3001/getOrgs/';
  searchForm: FormGroup;

  constructor(private _http: HttpClient, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      state: ['']
    })

    this._http.get<Organizations[]>(this._url).subscribe(organization => {
      this.organization = organization;
    });
  }


  // access form fields
  get getFormValues() {
    return this.searchForm.controls;
  }

  reRoute(org) {
    var orgId = org._id;
    console.log(orgId);
    this.router.navigate(['/apply', orgId]);
  }

    search(){
      if (this.searchForm.invalid) {
        return;
      }

      const searchedState = this.getFormValues.state.value
      const correctedState = searchedState.charAt(0).toUpperCase() + searchedState.substring(1);
      console.log(correctedState);

      this._http.get<Organizations>(`${this._url_specific}${correctedState}`)
        .subscribe(organization => {
          this.organ = organization;
        })
    }

  }

