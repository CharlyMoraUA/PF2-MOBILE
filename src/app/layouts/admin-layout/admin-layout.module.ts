import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatIconModule } from '@angular/material/icon';
import { CandidatoInfoTecnicaComponent } from 'app/candidato/candidato-infoTecnica/candidatoInfoTecnica/candidatoInfoTecnica.component';
import { CandidatoCrearService } from 'app/candidato/candidatoCrear.service';
import { CandidatoInfoService } from 'app/candidato/candidatoInfo.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ConsultarEquipoComponent } from 'app/empresa/consultar-equipo/consultar-equipo.component';
import { DetallarRolComponent } from 'app/empresa/gestion-empresa/detallar-rol/detallar-rol.component';
import { ResultadosEntrevistasComponent } from 'app/candidato/gestion/resultados-entrevistas/resultadosEntrevistas.component';
import { ResultadosEntrevistasService } from 'app/candidato/resultadosEntrevistas.service';
import { CandidatoInfoLaboralComponent } from 'app/candidato/candidato-infoLaboral/candidato-infoLaboral.component';
import { NuevaInfoLaboralComponent } from 'app/candidato/candidato-infoLaboral/nuevaInfoLaboral.component';
import { ConsultarResultadosPruebasTecnicasComponent } from 'app/empresa/consultar-resultados-pruebas-tecnicas/consultar-resultados-pruebas-tecnicas.component';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatSelectCountryModule.forRoot('es'),
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CandidatoInfoTecnicaComponent,
    ConsultarEquipoComponent,
    DetallarRolComponent,
    ResultadosEntrevistasComponent,
    CandidatoInfoLaboralComponent,
    NuevaInfoLaboralComponent,
    ConsultarResultadosPruebasTecnicasComponent
  ],
  providers:[
    CandidatoCrearService,
    CandidatoInfoService,
    ResultadosEntrevistasService
  ]
})

export class AdminLayoutModule {}
