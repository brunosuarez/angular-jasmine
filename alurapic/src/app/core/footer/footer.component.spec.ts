import { UserService } from 'src/app/core/user/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer.component';
import { TestBed } from '@angular/core/testing';
describe("O componente Footer", () => {
  let component: FooterComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [UserService],
      declarations: [FooterComponent]
    }).compileComponents();
  }))

  beforeEach(() => {
    const userService = TestBed.get(UserService);

    spyOn(userService, "getUser").and.returnValue(
      of({
      email: 'alvaro@alvaro.com',
      name: "Alvaro",
      id: 1
    }))

    const fixture = TestBed.createComponent(FooterComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deve ser instanciado", () => {
    expect(component).toBeTruthy();
  })
})
