import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Company } from '../../../models/common/company';
import { Demand } from '../../../models/demandSection/demand';
import { CompanyService } from '../../../services/common/company.service';
import { DemandService } from '../../../services/demandSection/demand.service';
import { NotificationService } from '../../../services/Shared/notification.service';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demand-edit',
  templateUrl: './demand-edit.component.html',
  styleUrls: ['./demand-edit.component.css']
})
export class DemandEditComponent {
  demand: Demand = new Demand();
  demandForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    demandExpiryDate: new FormControl(undefined, Validators.required),
    companyId: new FormControl('', Validators.required)
  });
  company: Company[] = [];
  f() {
    return this.demandForm.controls;
  }
  constructor(
    private demandSvc: DemandService,
    private companySvc: CompanyService,
    private notificationSvc: NotificationService,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private router:Router
  ) { }
  update(): void {
    if (this.demandForm.invalid) return;
    console.log(this.demandForm.value);

    Object.assign(this.demand, this.demandForm.value);
    console.log(this.demand);
    /*let data: Demand = { demandId: this.demand.demandId, title: this.demand.title, demandExpiryDate: this.demand.demandExpiryDate, companyId: this.demand.companyId };*/


    //this.demand.title = this.f()['title'].value;
    //this.demand.demandExpiryDate = this.f()['demandExpiryDate'].value;
    //this.demand.demandExpiryDate = new Date(<string>this.datePipe.transform(this.demand.demandExpiryDate, "yyyy-MM-dd"));
    //this.demand.companyId = this.f()['companyId'].value;
    this.demandSvc.update(this.demand)
      .subscribe(r => {
        this.notificationSvc.message("Data Update successfully!!!", "DISMISS");
        this.router.navigate(['/demand']);
        this.demandForm.reset({});
        console.log(r);
      }, err => {
        this.notificationSvc.message("Failed to Update data!!!", "DISMISS");
      })
  }

  //ngOnInit(): void {
  //  let id: number = this.activatedRoute.snapshot.params['id'];
  //  this.demandSvc.getById(id)
  //    .subscribe({
  //      next: r => {
  //        this.demand = r;
  //        this.demandForm.patchValue(this.demand)
  //        console.log(this.demand)
  //      },
  //      error: err => {
  //        this.notificationSvc.message('Failed to load product data', 'DISMISS')
  //        throwError(() => err);
  //      }
  //    });
  //}


  ngOnInit(): void {
    let id: number = this.activatedRoute.snapshot.params['id'];
    this.demandSvc.getById(id)
      .subscribe(x => {
        this.demand = x;
        this.demandForm.patchValue(this.demand);
      }, err => {
        this.notificationSvc.message("Failed to load Demand List!!", "DISMISS");
      })

    this.companySvc.get()
      .subscribe(r => {
        this.company = r;
      }, err => {
        this.notificationSvc.message("Failed to load Company", "DISMISS");
      })
  }
}
