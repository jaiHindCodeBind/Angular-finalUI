import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
//import { DataTableModule } from "angular2-datatable";
import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';
import { MyDatePickerModule } from 'mydatepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MorrisJsModule } from 'angular-morris-js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LoginComponent } from './Pages/login/login.component';
import { LandingPageComponent } from './Pages/login/landing-page/landing-page.component';
import { UserDetailsComponent } from './Pages/login/user-details/user-details.component';
import { OMFComponent } from './Pages/omf/omf.component';
import { MRFComponent } from './Pages/mrf/mrf.component';
import { CCLComponent } from './Pages/ccl/ccl.component';
import { ExitInterviewComponent } from './Pages/exit-interview/exit-interview.component';
import { AllowancesComponent } from './Pages/allowances/allowances.component';
import { COPComponent } from './Pages/cop/cop.component';
import { ReportsComponent } from './Pages/reports/reports.component';
import { ManagerDashboardComponent } from './Pages/dasboard/manager-dashboard/manager-dashboard.component';
import { EmployeeDashboardComponent } from './Pages/dasboard/employee-dashboard/employee-dashboard.component';
import { DataTablesModule } from 'angular-datatables';
 

const routes: Routes = [
  /*{ path: '', redirectTo: 'pages/login/landing-page', pathMatch: 'full' },*/

  { path: 'pages/login', component: LoginComponent },
  { path: 'LandingPage', component: LandingPageComponent , children: [
    { path: '', redirectTo: 'Landing-Page', pathMatch: 'full' },
    { path: 'Landing-Page', component: LandingPageComponent }
    ]
  },
  { path: 'ManagerDashboard', component: ManagerDashboardComponent , children: [
    { path: '', redirectTo: 'Manager-Dashboard', pathMatch: 'full' },
    { path: 'Manager-Dashboard', component: ManagerDashboardComponent }
    ]
  },
  { path: 'OMFComponent', component: OMFComponent , children: [
    { path: '', redirectTo: 'OMF-Component', pathMatch: 'full' },
    { path: 'OMF-Component', component: OMFComponent }
    ]
  },
  { path: '**', redirectTo: 'pages/login' }
  
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    LandingPageComponent,
    UserDetailsComponent,
    OMFComponent,
    MRFComponent,
    CCLComponent,
    ExitInterviewComponent,
    AllowancesComponent,
    COPComponent,
    ReportsComponent,
    ManagerDashboardComponent,
    EmployeeDashboardComponent,
     
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ChartsModule,
    NgSlimScrollModule,
    MyDatePickerModule,
    NgxDatatableModule,
    MorrisJsModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(routes),
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
