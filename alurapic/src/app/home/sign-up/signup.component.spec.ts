import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from './../../shared/componets/vmessage/vmessage.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { SignUpService } from './signup.service';
import { SignUpComponent } from './signup.component';
import { async, TestBed } from '@angular/core/testing';

describe("o formulário Signup", ()=>{

  describe("o formulário SignUp", ()=> {
    let component: SignUpComponent;

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
      const fixture = TestBed.createComponent(SignUpComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it("deve ser instanciado", () => {
      expect(component).toBeTruthy();
    });
  });
})
