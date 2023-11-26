/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CandidatoInfoLaboralComponent } from './candidato-infoLaboral.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';

describe('CandidatoInfoLaboralComponent', () => {
  let component: CandidatoInfoLaboralComponent;
  let fixture: ComponentFixture<CandidatoInfoLaboralComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      declarations: [ CandidatoInfoLaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoInfoLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('should invoke consultarInfoLaboral', () => {
    const spyConsultarInfoLaboral = spyOn(component, 'consultarInfoLaboral').and.callThrough();
    component.consultarInfoLaboral(1);
    expect(spyConsultarInfoLaboral).toHaveBeenCalled();
   });


});
