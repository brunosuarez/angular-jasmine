import { UserService } from 'src/app/core/user/user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('o serviço AuthServcie', ()=>{

  let service: AuthService;
  let httpMoc: HttpTestingController;
  let userService: UserService;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [AuthService]
    });
    service = TestBed.get(AuthService);
    httpMoc = TestBed.get(HttpTestingController);
    userService = TestBed.get(userService);
  })

  it('deve ser instanciado', ()=>{
    expect(service).toBeTruthy();
  });

  it('deve autenticar o usuário', fakeAsync(()=>{
    const fakeBody = {
      id: 1,
      nome: "alvaro",
      email: "alvaro@alura.com"
    };

    const spy = spyOn(userService, "setToken").and.returnValue(null);

    service.authenticate('alvaro','1234').subscribe(response => {
      expect(response.body).toEqual(fakeBody);
      expect(spy).toHaveBeenCalledWith("tokenTest");
    })

    const request  = httpMoc.expectOne((req)=>{
      return req.method === "POST";
    });

    request.flush(fakeBody, {headers: {'x-acess-token': "tokenTest"}});

    tick();

  }));

})
