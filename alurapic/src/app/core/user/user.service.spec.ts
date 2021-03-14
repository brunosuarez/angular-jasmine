import { TestBed } from '@angular/core/testing';
import { TokenService } from './../token/token.service';
import { UserService } from 'src/app/core/user/user.service';

describe('o serviço UserService', ()=>{
  let service: UserService;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [UserService]
    });
    service = TestBed.get(UserService);
  });

  it('deve ser instanciado', ()=>{
    expect(service).toBeTruthy();
  });

  it('deve através de um token, recuperar as informações do usuário', ()=>{
    const token = "";
    const service = new UserService(new TokenService);
    service.setToken(token);
    expect(service.isLogged()).toBeTruthy();
    expect(service.getUserName()).toBe("flavio");
    service.getUser().subscribe(user =>{
      expect(user.name).toBe("flavio");
    });
  });

  it('deve limpar as informações no logout', ()=>{
    const token = "";
    service.setToken(token);
    service.logout();
    expect(service.isLogged()).toBeFalsy();
    expect(service.getUserName).toBe("");
  })

});
