/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPostMessageComponent } from './list-post-message.component';

describe('ListPostMessageComponent', () => {
  let component: ListPostMessageComponent;
  let fixture: ComponentFixture<ListPostMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListPostMessageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
