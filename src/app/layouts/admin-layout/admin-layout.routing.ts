import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { HistorialEntrevistasComponent } from 'app/candidato/gestion/historial-entrevistas/historial-entrevistas.component';
import { CandidatoInfoTecnicaComponent } from 'app/candidato/candidato-infoTecnica/candidatoInfoTecnica/candidatoInfoTecnica.component';
import { ConsultarEquipoComponent } from 'app/empresa/consultar-equipo/consultar-equipo.component';
import { ResultadosEntrevistasComponent } from 'app/candidato/gestion/resultados-entrevistas/resultadosEntrevistas.component';
import { CandidatoInfoLaboralComponent } from 'app/candidato/candidato-infoLaboral/candidato-infoLaboral.component';
import { NuevaInfoLaboralComponent } from 'app/candidato/candidato-infoLaboral/nuevaInfoLaboral.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'historial_entrevistas',        component: HistorialEntrevistasComponent },
    { path: 'info_tecnica',   component: CandidatoInfoTecnicaComponent },
    { path: 'equipos',        component: ConsultarEquipoComponent },
    { path: 'resultadosEntrevistas',  component: ResultadosEntrevistasComponent },
    { path: 'info_laboral',     component:  CandidatoInfoLaboralComponent},
    { path: 'nuevaInfoLaboral', component: NuevaInfoLaboralComponent}
];
