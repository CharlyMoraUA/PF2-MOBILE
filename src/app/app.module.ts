import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AgregarRolComponent } from './empresa/gestion-empresa/agregar-rol/agregar-rol.component';
import { LandingComponent } from './landing/landing/landing.component';
import { CambioContrasenaComponent } from './landing/cambio-contrasena/cambio-contrasena.component';
import { MatDialogModule} from '@angular/material/dialog';
import { AceptarCambioComponent } from './landing/aceptar-cambio/aceptar-cambio.component';
import { EvaluacionCandidatoComponent } from './empresa/evaluacion-candidato/evaluacion-candidato.component';
import { CandidatoInfoAcademicaComponent } from './candidato/candidato-info-academica/candidato-info-academica.component';
import { CrearInfoAcademicaComponent } from './candidato/crear-info-academica/crear-info-academica.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    MatDatepickerModule, MatNativeDateModule,
    MatDialogModule,
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
    MatIconModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginCandidatoComponent,
    CandidatoComponent,
    LoginEmpresaComponent,
    HistorialEntrevistasComponent,
    AgregarRolComponent,
    LandingComponent,
    CambioContrasenaComponent,
    AceptarCambioComponent,
    EvaluacionCandidatoComponent,
    CandidatoInfoAcademicaComponent,
    CrearInfoAcademicaComponent,
  ],
  providers:[ToastrService,MatDatepickerModule, MatNativeDateModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
