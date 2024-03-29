package group12.project.Views;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class LoginViewTests {
    
    @ParameterizedTest
    @CsvSource({
        "Admin, P@ssw0rd, true",
        "TooLongUsername, P@ssw0rd, false", // Username is too long
        "EmptyUsername, P@ssw0rd, false", // Empty username
        "Admin, , false", // Empty password
        "Admin, TooShort, false", // Password is too short
        "Admin, TooLongPasswordTooLongPasswordTooLongPassword, false", // Password is too long
        "Admin, PasswordNoNumber, false", // Password without number
        "Admin, PasswordNoSpecialChar, false", // Password without special character
        "Admin, passwordnouppercase, false" // Password without uppercase
    })

    public void createLoginView(String username, String password, boolean isValid) throws Exception {
        if (!isValid) {
            Exception exception = assertThrows(Exception.class, () -> {
                new loginView(username, password);
            });
            assertEquals(username + " and " + password + " was not valid", exception.getMessage());
        } else {
            loginView login = new loginView(username, password);
            assertEquals(username, login.getUsername());
            assertEquals(password, login.getPassword());
        }
    }
}
