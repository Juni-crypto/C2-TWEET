import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTweetsComponent } from './your-tweets.component';

describe('YourTweetsComponent', () => {
  let component: YourTweetsComponent;
  let fixture: ComponentFixture<YourTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
