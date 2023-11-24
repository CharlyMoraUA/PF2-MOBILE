import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: '', class: '' },
    { path: '/info_tecnica', title: 'Información técnica',  icon:'', class: '' },
    { path: '/historial_entrevistas', title: 'Historial de Entrevistas',  icon:'', class: '' },
    { path: '/equipos', title: 'Equipos',  icon: '', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  ROUTES

  constructor() { }

  ngOnInit() {
    this.ROUTES = getRoutes()
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

export function getRoutes() : RouteInfo[]{
  let usertype = sessionStorage.getItem("usertype")
  console.log('usertype is: ', usertype)
  if(usertype == 'candidato'){
    return [
      { path: '/info_tecnica', title: 'Información técnica',  icon:'', class: '' },
      { path: '/info_laboral', title: 'Información laboral',  icon:'', class: '' },
      { path: '/historial_entrevistas', title: 'Historial de Entrevistas',  icon:'', class: '' },
    ];
  }
  else{
    return [
      { path: '/equipos', title: 'Equipos',  icon: '', class: '' },
      { path: '/resultadosEntrevistas', title: 'Resultado Entrevistas',  icon: '', class: '' },
    ];
  }
}

