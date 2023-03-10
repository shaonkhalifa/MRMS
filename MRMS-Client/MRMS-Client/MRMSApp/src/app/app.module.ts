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
    HomeComponent
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
  providers: [HttpClient,DemandService,TradeService,NotificationService,DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
