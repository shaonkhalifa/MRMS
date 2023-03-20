import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentCreateComponent } from './component/agentSection/agent-create/agent-create.component';
import { AgentEditComponent } from './component/agentSection/agent-edit/agent-edit.component';
import { AgentViewComponent } from './component/agentSection/agent-view/agent-view.component';
import { ApplicantCreateComponent } from './component/applicantSection/applicant-create/applicant-create.component';
import { ApplicantEditComponent } from './component/applicantSection/applicant-edit/applicant-edit.component';
import { ApplicantViewComponent } from './component/applicantSection/applicant-view/applicant-view.component';
import { CompanyCreateComponent } from './component/company/company-create/company-create.component';
import { CompanyEditComponent } from './component/company/company-edit/company-edit.component';
import { CompanyViewComponent } from './component/company/company-view/company-view.component';
import { DemandCreateComponent } from './component/demandSection/demand-create/demand-create.component';
import { DemandEditComponent } from './component/demandSection/demand-edit/demand-edit.component';
import { DemandViewComponent } from './component/demandSection/demand-view/demand-view.component';
import { TradeCreateComponent } from './component/demandSection/trade-create/trade-create.component';
import { TradeEditComponent } from './component/demandSection/trade-edit/trade-edit.component';
import { TradeViewComponent } from './component/demandSection/trade-view/trade-view.component';
import { HomeComponent } from './component/home/home.component';
import { MedicalViewComponent } from './component/MedicalSection/medical-view/medical-view.component';
import { MedicalCenterCreateComponent } from './component/MedicalSection/MedicalCenter/medical-center-create/medical-center-create.component';
import { MedicalCenterEditComponent } from './component/MedicalSection/MedicalCenter/medical-center-edit/medical-center-edit.component';
import { MedicalCenterViewComponent } from './component/MedicalSection/MedicalCenter/medical-center-view/medical-center-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'demand', component: DemandViewComponent },
  { path: 'demand-create', component: DemandCreateComponent },
  { path: 'demand-edit/:id', component: DemandEditComponent },
  { path: 'trade', component: TradeViewComponent },
  { path: 'trade-create', component: TradeCreateComponent },
  { path: 'trade-edit/:id', component: TradeEditComponent },
  { path: 'medical-view', component: MedicalViewComponent },
  { path: 'medicalCenter', component: MedicalCenterViewComponent },
  { path: 'medicalCenterCreate', component: MedicalCenterCreateComponent },
  { path: 'medicalCenterEdit/:id', component: MedicalCenterEditComponent },
  { path: 'company', component: CompanyViewComponent },
  { path: 'company-view', component: CompanyViewComponent },
  { path: 'company-create', component: CompanyCreateComponent },
  { path: 'company-edit/:id', component: CompanyEditComponent },
  { path: 'agent', component: AgentViewComponent },
  { path: 'agent-view', component: AgentViewComponent },
  { path: 'agent-create', component: AgentCreateComponent },
  { path: 'agent-edit/:id', component: AgentEditComponent },
  { path: 'applicant', component: ApplicantViewComponent },
  { path: 'applicant-create', component: ApplicantCreateComponent },
  { path: 'applicant-edit/:id', component: ApplicantEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
