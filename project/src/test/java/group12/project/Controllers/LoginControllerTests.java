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

        loginView loginview = new loginView(
            "Admin",
            "P@ssw0rd"
        );

        Map<String, String> login = new HashMap<>();
        login.put("username", loginview.getUsername());
        login.put("password", loginview.getPassword());

        Mockito.when(service.validateLogin(loginview))
            .thenReturn(true);

        var result = controller.userLogin(login);

        Map<String, Boolean> body = new HashMap<>();
        body.put("credentials", true);

        assertEquals(body, result.getBody());

    }

    @Test
    public void userLogin_BadUsername() throws Exception {

        Map<String, String> login = new HashMap<>();
        login.put("username", "");
        login.put("password", "P@ssw0rd");

        var result = controller.userLogin(login);

        Map<String, Boolean> body = new HashMap<>();
        body.put("credentials", false);

        assertEquals(body, result.getBody());

    }

    @Test
    public void userLogin_BadPassword() throws Exception {

        Map<String, String> login = new HashMap<>();
        login.put("username", "Admin");
        login.put("password", "Fail");

        var result = controller.userLogin(login);

        Map<String, Boolean> body = new HashMap<>();
        body.put("credentials", false);

        assertEquals(body, result.getBody());

    }

    @Test
    public void userLogin_ValidationFails() throws Exception {

        loginView loginview = new loginView(
            "Admin",
            "P@ssw0rd"
        );

        Map<String, String> login = new HashMap<>();
        login.put("username", loginview.getUsername());
        login.put("password", loginview.getPassword());

        Mockito.when(service.validateLogin(loginview))
            .thenReturn(false);

        var result = controller.userLogin(login);

        Map<String, Boolean> body = new HashMap<>();
        body.put("credentials", false);

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
