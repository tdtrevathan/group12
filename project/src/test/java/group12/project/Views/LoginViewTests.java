package group12.project.Views;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class LoginViewTests {
    
    @Test
    public void createLoginView_valuesAreSetCorrectly() throws Exception {
        loginView login = new loginView(
            "Admin",
            "P@ssw0rd"
        );

        assertEquals("Admin", login.getUsername());
        assertEquals("P@ssw0rd", login.getPassword());
    }

    @Test
    public void createLoginView_UsernameTooLong_ExceptionThrown() throws Exception {
        var badParameter = "AdminAdminAdminAdminAdminAdminAdminAdminAdminAdminAdmin";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                badParameter,
                "P@ssw0rd"
            );
        });

        assertEquals(result.getMessage(), "Invalid username: " + badParameter);
    }

    @Test
    public void createLoginView_UsernameEmpty_ExceptionThrown() throws Exception {
        var badParameter = "";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                badParameter,
                "P@ssw0rd"
            );
        });

        assertEquals(result.getMessage(), "Invalid username: " + badParameter);
    }

    @Test
    public void createLoginView_PasswordEmpty_ExceptionThrown() throws Exception {
        var badParameter = "";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                "Admin",
                badParameter
            );
        });

        assertEquals(result.getMessage(), "Invalid password length: " + badParameter);
    }

    @Test
    public void createLoginView_PasswordTooShort_ExceptionThrown() throws Exception {
        var badParameter = "P@sswor";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                "Admin",
                badParameter
            );
        });

        assertEquals(result.getMessage(), "Invalid password length: " + badParameter);
    }

    @Test
    public void createLoginView_PasswordTooLong_ExceptionThrown() throws Exception {
        var badParameter = "T3stP@sswordT3stP@sswordT3stP@sswordT3stP@sswordT3stP@ssword";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                "Admin",
                badParameter
            );
        });

        assertEquals(result.getMessage(), "Invalid password length: " + badParameter);
    }

    @Test
    public void createLoginView_PasswordNoNumber_ExceptionThrown() throws Exception {
        var badParameter = "TestP@ssword";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                "Admin",
                badParameter
            );
        });

        assertEquals(result.getMessage(), "Invalid password format: " + badParameter);
    }

    @Test
    public void createLoginView_PasswordNoSpecialCharacter_ExceptionThrown() throws Exception {
        var badParameter = "T3stPassword";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                "Admin",
                badParameter
            );
        });

        assertEquals(result.getMessage(), "Invalid password format: " + badParameter);
    }

    @Test
    public void createLoginView_PasswordNoUpperCase_ExceptionThrown() throws Exception {
        var badParameter = "t3stp@ssword";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                "Admin",
                badParameter
            );
        });

        assertEquals(result.getMessage(), "Invalid password format: " + badParameter);
    }

}
