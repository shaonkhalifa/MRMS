import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemandCreateComponent } from './component/demandSection/demand-create/demand-create.component';
import { DemandViewComponent } from './component/demandSection/demand-view/demand-view.component';
import { DemandEditComponent } from './component/demandSection/demand-edit/demand-edit.component';
import { TradeCreateComponent } from './component/demandSection/trade-create/trade-create.component';
import { TradeViewComponent } from './component/demandSection/trade-view/trade-view.component';
import { TradeEditComponent } from './component/demandSection/trade-edit/trade-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HttpClient,HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DemandService } from './services/demandSection/demand.service';
import { TradeService } from './services/demandSection/trade.service';
import { NotificationService } from './services/Shared/notification.service';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatModule } from './module/shared/mat/mat.module';
import { ConfirmDialogComponent } from './component/shared/confirm-dialog/confirm-dialog.component';
import { HomeComponent } from './component/home/home.component';
import { AuthInterceptor } from './Shared/authconfig.interceptor';
import { MedicalIssuesCreateComponent } from './component/MedicalSection/MedicalIssues/medical-issues-create/medical-issues-create.component';
import { MedicalIssuesViewComponent } from './component/MedicalSection/MedicalIssues/medical-issues-view/medical-issues-view.component';
import { MedicalIssuesEditComponent } from './component/MedicalSection/MedicalIssues/medical-issues-edit/medical-issues-edit.component';
import { MedicalFilessCreateComponent } from './component/MedicalSection/MedicalFiles/medical-filess-create/medical-filess-create.component';
import { MedicalFilessEditComponent } from './component/MedicalSection/MedicalFiles/medical-filess-edit/medical-filess-edit.component';
import { MedicalFilessViewComponent } from './component/MedicalSection/MedicalFiles/medical-filess-view/medical-filess-view.component';
import { MedicalRecordCreateComponent } from './component/MedicalSection/MedicalRecord/medical-record-create/medical-record-create.component';
import { MedicalRecordEditComponent } from './component/MedicalSection/MedicalRecord/medical-record-edit/medical-record-edit.component';
import { MedicalRecordViewComponent } from './component/MedicalSection/MedicalRecord/medical-record-view/medical-record-view.component';
import { MedicalIssuesCommentViewComponent } from './component/MedicalSection/MedicalIssuesComment/medical-issues-comment-view/medical-issues-comment-view.component';
import { MedicalIssuesCommentCreateComponent } from './component/MedicalSection/MedicalIssuesComment/medical-issues-comment-create/medical-issues-comment-create.component';
import { MedicalIssuesCommentEditComponent } from './component/MedicalSection/MedicalIssuesComment/medical-issues-comment-edit/medical-issues-comment-edit.component';
import { MedicalCenterCreateComponent } from './component/MedicalSection/MedicalCenter/medical-center-create/medical-center-create.component';
import { MedicalCenterEditComponent } from './component/MedicalSection/MedicalCenter/medical-center-edit/medical-center-edit.component';
import { MedicalCenterViewComponent } from './component/MedicalSection/MedicalCenter/medical-center-view/medical-center-view.component';
import { MedicalViewComponent } from './component/MedicalSection/medical-view/medical-view.component';
import { CompanyCreateComponent } from './component/company/company-create/company-create.component';
import { CompanyEditComponent } from './component/company/company-edit/company-edit.component';
import { CompanyViewComponent } from './component/company/company-view/company-view.component';
import { AgentCreateComponent } from './component/agentSection/agent-create/agent-create.component';
import { AgentEditComponent } from './component/agentSection/agent-edit/agent-edit.component';
import { AgentViewComponent } from './component/agentSection/agent-view/agent-view.component';
import { AgentService } from './services/Agents/agents.service';

@NgModule({
  declarations: [
    AppComponent,
    DemandCreateComponent,
    DemandViewComponent,
    DemandEditComponent,
    TradeCreateComponent,
    TradeViewComponent,
    TradeEditComponent,
    NavbarComponent,
    ConfirmDialogComponent,
    HomeComponent,
    MedicalIssuesCreateComponent,
    MedicalIssuesViewComponent,
    MedicalIssuesEditComponent,
    MedicalFilessCreateComponent,
    MedicalFilessEditComponent,
    MedicalFilessViewComponent,
    MedicalRecordCreateComponent,
    MedicalRecordEditComponent,
    MedicalRecordViewComponent,
    MedicalIssuesCommentViewComponent,
    MedicalIssuesCommentCreateComponent,
    MedicalIssuesCommentEditComponent,
    MedicalCenterCreateComponent,
    MedicalCenterEditComponent,
    MedicalCenterViewComponent,
    MedicalViewComponent,
    CompanyCreateComponent,
    CompanyEditComponent,
    CompanyViewComponent,
    AgentCreateComponent,
    AgentEditComponent,
    AgentViewComponent,
    AgentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DatePipe,
    ReactiveFormsModule,
    LayoutModule,
    MatModule
  ],
  providers: [HttpClient, DemandService, TradeService, NotificationService, AgentService, DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
