import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/common/company';
import { Demand } from 'src/app/models/demandSection/demand';
import { NotificationService } from 'src/app/services/Shared/notification.service';
import { CompanyService } from 'src/app/services/common/company.service';
import { DemandService } from 'src/app/services/demandSection/demand.service';

@Component({
  selector: 'app-demand-details',
  templateUrl: './demand-details.component.html',
  styleUrls: ['./demand-details.component.css']
})
export class DemandDetailsComponent {
  public get dialog(): MatDialog {
    return this._dialog;
  }
  public set dialog(value: MatDialog) {
    this._dialog = value;
  }
  demand: Demand = new Demand(4,"hello",new Date('10-10-2020'),5,"Company Name");
  //company: Company = new Company;
  dataSource!: MatTableDataSource<any>;
  displayedColumns = ['property', 'value'];

  constructor(
    private demandSvc: DemandService,
    private companySvc:CompanyService,
    private activatedRoute: ActivatedRoute,
    private notificationSvc: NotificationService,
    private _dialog: MatDialog
  ) {  }


  ngOnInit(): void {
    // let id: number = this.activatedRoute.snapshot.params['id'];
    // this.demandSvc.getById(id)
    //   .subscribe(x => {
    //     this.demand = x;
    //   }, err => {
    //     this.notificationSvc.message("Failed to load Demand !!", "DISMISS");
    //   })

      // if (this.demand.companyId !== undefined) {
      //   this.companySvc.getById(this.demand.companyId)
      //   .subscribe(r => {
      //     this.company = r;
      //   }, err => {
      //     this.notificationSvc.message("Failed to load Company", "DISMISS");
      //   })
      // }

      const demandInfo = Object.entries(this.demand).map(([property, value]) => ({
        property,
        value
      }));

      this.dataSource = new MatTableDataSource(demandInfo);

  }

}
