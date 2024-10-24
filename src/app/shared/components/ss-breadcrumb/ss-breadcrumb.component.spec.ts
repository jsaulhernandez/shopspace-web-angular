import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsBreadcrumbComponent } from './ss-breadcrumb.component';

describe('SsBreadcrumbComponent', () => {
  let component: SsBreadcrumbComponent;
  let fixture: ComponentFixture<SsBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsBreadcrumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
