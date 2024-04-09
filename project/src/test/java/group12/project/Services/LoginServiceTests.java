package group12.project.Services;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import group12.project.Repos.loginRepo;
import group12.project.Views.loginView;
import group12.project.Views.loginViewEncrypted;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class LoginServiceTests {

	@InjectMocks
	LoginService service;

    @Mock
    private loginRepo repo;

	@Test
    public void validateLogin_Success() throws Exception{

        loginView login = new loginView(
            "Admin",
            "P@ssw0rd"
        );

        loginViewEncrypted encryptedLogin = new loginViewEncrypted(login.getUsername(), login.getPassword());
        encryptedLogin.encryptPassword();

        Mockito.when(repo.findByUsername(login.getUsername()))
            .thenReturn(encryptedLogin);

        var result = service.validateLogin(login);
        assertEquals(true, result);
    }

    @Test
    public void validateLogin_Successasdafds() throws Exception{

        String password = "stsdt2213s";

        BCryptPasswordEncoder bc = new BCryptPasswordEncoder();

        var test1 = bc.encode(password);
        var test2 = bc.encode(password);

        assertTrue(bc.matches(password, test1));
        assertTrue(bc.matches(password, test2));
    }

    @Test
    public void validateLogin_Failure() throws Exception{

        loginView login = new loginView(
            "Admin",
            "P@ssw0rd"
        );

        loginView badLogin = new loginView(
            "Admin",
            "F@1lurePassword"
        );

        loginViewEncrypted encryptedLogin = new loginViewEncrypted(login.getUsername(), login.getPassword());

        Mockito.when(repo.findByUsername(login.getUsername()))
            .thenReturn(encryptedLogin);

        var result = service.validateLogin(badLogin);
        assertEquals(false, result);

    }

    @Test
    public void createLogin_SuccesfullyCreatesLogin() throws Exception {

        loginView login = new loginView(
            "Admin",
            "P@ssw0rd"
        );

        var result = service.create(login);
        assertEquals(login, result);
    }
}