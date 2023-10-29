import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CandidatoComponent } from 'app/candidato/candidato-crear/candidato.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import { LoginCandidatoComponent } from './landing/login-candidato/login-candidato.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginEmpresaComponent } from './landing/login-empresa/login-empresa.component';
import { HistorialEntrevistasComponent } from './candidato/gestion/historial-entrevistas/historial-entrevistas.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
    MatSelectCountryModule.forRoot('es'),
    MatIconModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginCandidatoComponent,
    CandidatoComponent,
    LoginEmpresaComponent,
    HistorialEntrevistasComponent
  ],
  providers:[ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
