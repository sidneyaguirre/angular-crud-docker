import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { BusinessService } from "../business.service";

@Component({
  selector: "app-crud-edit",
  templateUrl: "./crud-edit.component.html",
  styleUrls: ["./crud-edit.component.css"]
})
export class CrudEditComponent implements OnInit {
  angForm: FormGroup;
  sub: Subscription;
  public business: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private bs: BusinessService
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ["", Validators.required],
      business_name: ["", Validators.required],
      business_gst_number: ["", Validators.required]
    });
  }

  gotoList() {
    this.router.navigate(['/business/list']);
  }

  editBusiness(person_name, business_name, business_gst_number, id) {
    this.bs.editBusiness(person_name, business_name, business_gst_number, id);
  }

  remove(_id) {
    this.bs.remove(_id).subscribe(result => {
    this.gotoList();
  }, error => console.error(error));
}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.business = params;
      console.log("bs", this.business);
    });
  }
}
