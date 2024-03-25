package group12.project.Services;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import group12.project.Repos.loginRepo;
import group12.project.Views.loginView;

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

        // Mockito.when(repo.findByUsername(login.getUsername()))
        //     .thenReturn(login);

        var result = service.validateLogin(login);
        assertEquals(true, result);

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

        // Mockito.when(repo.findByUsername(login.getUsername()))
        //     .thenReturn(login);

        var result = service.validateLogin(badLogin);
        assertEquals(false, result);

    }

    @Test
    public void createLogin_SuccesfullyCreatesLogin() throws Exception {

        loginView login = new loginView(
            "Admin",
            "P@ssw0rd"
        );

        Mockito.when(repo.insert(login))
            .thenReturn(login);

        var result = service.create(login);
        assertEquals(login, result);

    }
}