/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { CandidatoInfoTecnicaComponent } from './candidatoInfoTecnica.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { EMPTY } from 'rxjs';

describe('CandidatoInfoTecnicaComponent', () => {
  let component: CandidatoInfoTecnicaComponent;
  let fixture: ComponentFixture<CandidatoInfoTecnicaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        MatDialogModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      declarations: [ CandidatoInfoTecnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoInfoTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create headers of table ', () => {
    expect(debug.query(By.css('th')).attributes["class"]).toEqual("mat-h2 text-left");
  });

  it('should create a table to show technical information', () => {
    expect(debug.query(By.css('table')).attributes["class"]).toEqual("table");
  });

  it('should show the title', () => {
    expect(debug.query(By.css('h4')).attributes["class"]).toEqual("card-title");
  });

  it('change language', ()  => {
    fixture.detectChanges();
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('#sel-lang')).nativeElement;
    select.value = select.options[1].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  });

  it('should invoke consultarInfoTecnica', () => {
    const spyConsultarInfoTecnica = spyOn(component, 'consultarInfoTecnica').and.callThrough();
    component.consultarInfoTecnica(1);
    expect(spyConsultarInfoTecnica).toHaveBeenCalled();
   });

   it('should invoke guardarInfoTecnica', () => {
    const spyGuardarInfoTecnica = spyOn(component, 'guardarInfoTecnica').and.callThrough();
    component.guardarInfoTecnica();
    expect(spyGuardarInfoTecnica).toHaveBeenCalled();
   });

   it('open dialog test', () => {
    const openDialogSpy = spyOn(component.dialog, 'open')
      .and
      .returnValue({afterClosed: () => EMPTY} as any);
 
    component.openDialog();
 
    expect(openDialogSpy).toHaveBeenCalled();
   });

});
