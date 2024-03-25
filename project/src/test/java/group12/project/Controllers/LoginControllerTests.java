package group12.project.Controllers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import group12.project.Repos.loginRepo;
import group12.project.Services.LoginService;
import group12.project.Views.loginView;

@SpringBootTest
class LoginControllerTests {
    
    @Mock
    private loginRepo repo;

    @Mock
    private LoginService service;

    @InjectMocks
    LoginController controller = new LoginController();

    @Test
    public void userLogin_Success() throws Exception {

        loginView login = new loginView(
            "Admin",
            "P@ssw0rd"
        );

        Mockito.when(service.validateLogin(login))
            .thenReturn(true);

        var result = controller.userLogin(login);

        Map<String, Boolean> body = new HashMap<>();
        body.put("username", true);

        assertEquals(body, result.getBody());

    }

    @Test
    public void createLogin_SuccesfullyCreatesLogin() throws Exception {

        loginView login = new loginView(
            "Admin",
            "P@ssw0rd"
        );

        Mockito.when(service.create(login))
            .thenReturn(login);

        var result = controller.createLogin(login);

        assertEquals(login, result);

    }

}
