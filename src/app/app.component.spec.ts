import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeDefined();
  });

  it('should return duplicateData, deDuplicatedData and logs when findDupes method invoked', () => {
    component.findDupes();
    fixture.detectChanges();

    expect(typeof component.duplicateData).toBe('object');
    expect(typeof component.deDuplicatedData).toBe('object');
    expect(typeof component.logs).toBe('object');
    expect(component.duplicateData.leads.length).toBe(5);
    expect(component.deDuplicatedData.leads.length).toBe(5);
    expect(component.logs.length).toBe(40);
  });

  it('should download file when downloadDeduplicatedData method invoked', () => {
    component.findDupes();
    fixture.detectChanges();
    component.downloadDeduplicatedData();
    expect(typeof component.deDuplicatedData).toBe('object');
  });

  it('should download file when downloadSoureData method invoked', () => {
    component.findDupes();
    fixture.detectChanges();
    component.downloadSoureData();
    expect(typeof component.data).toBe('object');
  });

  it('should download file when downloadDuplicateData method invoked', () => {
    component.findDupes();
    fixture.detectChanges();
    component.downloadDuplicateData();
    expect(typeof component.duplicateData).toBe('object');
  });

});
