import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { throwError } from 'rxjs';
import { Company } from '../../../models/common/company';
import { Demand } from '../../../models/demandSection/demand';
import { CompanyService } from '../../../services/common/company.service';
import { DemandService } from '../../../services/demandSection/demand.service';
import { NotificationService } from '../../../services/Shared/notification.service';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-demand-view',
  templateUrl: './demand-view.component.html',
  styleUrls: ['./demand-view.component.css']
})
export class DemandViewComponent {
  demand: Demand[] = [];
  company: Company[] = [];
  dataSource: MatTableDataSource<Demand> = new MatTableDataSource(this.demand);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["title", "date", "company", "actions"];

  constructor(
    private demandSvc: DemandService,
    private companySvc:CompanyService,
    private notificationSvc: NotificationService,
    private dialog: MatDialog
  ) { }
  confirmDelete(data: Demand) {
    //console.log(data);
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      enterAnimationDuration: '800ms'
    }).afterClosed()
      .subscribe(result => {
        //console.log(result);
        if (result) {
          this.demandSvc.delete(data)
            .subscribe({
              next: r => {
                this.notificationSvc.message('Demand removed', 'DISMISS');
                this.dataSource.data = this.dataSource.data.filter(c => c.demandId != data.demandId);
              },
              error: err => {
                this.notificationSvc.message('Failed to delete data', 'DISMISS');
                throwError(() => err);
              }
            })
        }
      })
  }

  getCompanyNames(id: number) {
    let c = this.company.find(c => c.companyId == id);
    return c ? c.name : '';
  }

  getCompanyName(id: number) {
    let c = this.company.find(c => c.companyId == id);
    return c ? c.name : '';
  }
  ngOnInit(): void {
    this.demandSvc.get().
      subscribe(x => {
        this.demand = x;
        console.log(x);
        this.dataSource.data = this.demand;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, err => {
        this.notificationSvc.message("Failed to load Demand data", "DISMISS");
      });
    this.companySvc.get()
      .subscribe(x => {
        this.company = x;
      }, err => {
        this.notificationSvc.message("Failed to load Demand data!!!", "DISMISS");
      })
  }
}
