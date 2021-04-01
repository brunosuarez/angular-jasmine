import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from './../../shared/componets/vmessage/vmessage.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { SignUpService } from './signup.service';
import { SignUpComponent } from './signup.component';
import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe("o formulário Signup", ()=>{

  describe("o formulário SignUp", ()=> {
    let component: SignUpComponent;
    let router: Router;
    let signupService: SignUpService;

    beforeEach(async(() =>{
      TestBed.configureTestingModule({
        declarations: [SignUpComponent],
        providers: [SignUpService, UserNotTakenValidatorService],
        imports: [HttpClientTestingModule,
        VMessageModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])
        ]
      }).compileComponents;
    }));

    beforeEach(() => {
      router = TestBed.get(router);
      signupService = TestBed.get(signupService);
      const fixture = TestBed.createComponent(SignUpComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it("deve ser instanciado", () => {
      expect(component).toBeTruthy();
    });

    it("deve cadastrar um usuario", ()=>{
      const navigateSpy = spyOn(router, "navigate")
      spyOn(signupService, 'signup').and.returnValue(of(null));
      component.signupForm.get('email').setValue('alvaro@alvaro.com');
      component.signupForm.get('fullName').setValue('Alvaro');
      component.signupForm.get('userName').setValue("alvaro");
      component.signupForm.get('password').setValue("123");
      component.signUp();
      expect(navigateSpy).toHaveBeenCalledWith([""])
    });

    it("deve realizar o log caso ocorra algum erro", ()=>{
      spyOn(signupService, "signup").and.returnValue(throwError("Erro do Servidor"));
      component.signupForm.get('email').setValue("alvaro@alvaro");
      component.signupForm.get('fullName').setValue("Alvaro");
      component.signupForm.get('userName').setValue("alvaro");
      component.signupForm.get("password").setValue("123");
      const spyLog = spyOn(console, 'log');
      component.signUp();
      expect(spyLog).toHaveBeenCalledWith("Erro de Servidor");
    })

  });


})
function toHaveBeenCalledWith() {
  throw new Error('Function not implemented.');
}

