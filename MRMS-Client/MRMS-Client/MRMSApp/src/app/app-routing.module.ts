import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  { path: 'medicalCenterEdit/:id', component: MedicalCenterEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
