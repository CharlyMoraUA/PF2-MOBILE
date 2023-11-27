/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NuevaInfoLaboralComponent } from './nuevaInfoLaboral.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { infoLaboral } from '../representaciones/infoLaboral';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import faker from '@faker-js/faker';

describe('NuevaInfoLaboralComponent', () => {
  let component: NuevaInfoLaboralComponent;
  let fixture: ComponentFixture<NuevaInfoLaboralComponent>;
  let debug: DebugElement;
  let infolaboral : infoLaboral;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      declarations: [ NuevaInfoLaboralComponent ],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaInfoLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;

    infolaboral = new infoLaboral(
      faker.datatype.string(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.number(),
    )
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the title', () => {
    expect(debug.query(By.css('h4')).attributes["class"]).toEqual("card-title");
  });

  it('change language', ()  => {
    fixture.detectChanges();
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('#sel-lang')).nativeElement;
    select.value = select.options[1].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  });

  it('should invoke agregarInfoLaboral', () => {
    const spyAgregarInfoLaboral = spyOn(component, "agregaInfoLaboral").and.callThrough();
    component.agregaInfoLaboral(infolaboral);
    expect(spyAgregarInfoLaboral).toHaveBeenCalled();
   });

});
