package group12.project.Views;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import group12.project.Views.loginView;

@SpringBootTest
public class LoginViewTests {
    
    @Test
    public void createLoginView_valuesAreSetCorrectly() throws Exception {
        loginView login = new loginView(
            "JoshEddie",
            "T3stp@ssword"
        );

        assertEquals("JoshEddie", login.getUsername());
        assertEquals("T3stp@ssword", login.getPassword());
    }

    @Test
    public void createLoginView_UsernameTooLong_ExceptionThrown() throws Exception {
        var badParameter = "JoshEddieJoshEddieJoshEddieJoshEddieJoshEddieJoshEddie";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                badParameter,
                "T3stp@ssword"
            );
        });

        assertEquals(result.getMessage(), badParameter + " was not valid");
    }

    @Test
    public void createLoginView_UsernameEmpty_ExceptionThrown() throws Exception {
        var badParameter = "";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                badParameter,
                "T3stp@ssword"
            );
        });

        assertEquals(result.getMessage(), badParameter + " was not valid");
    }

    @Test
    public void createLoginView_PasswordEmpty_ExceptionThrown() throws Exception {
        var badParameter = "";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                "JoshEddie",
                badParameter
            );
        });

        assertEquals(result.getMessage(), badParameter + " was not valid");
    }

    @Test
    public void createLoginView_PasswordTooShort_ExceptionThrown() throws Exception {
        var badParameter = "P@sswor";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                "JoshEddie",
                badParameter
            );
        });

        assertEquals(result.getMessage(), badParameter + " was not valid");
    }

    @Test
    public void createLoginView_PasswordTooLong_ExceptionThrown() throws Exception {
        var badParameter = "T3stP@sswordT3stP@sswordT3stP@sswordT3stP@sswordT3stP@ssword";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                "JoshEddie",
                badParameter
            );
        });

        assertEquals(result.getMessage(), badParameter + " was not valid");
    }

    @Test
    public void createLoginView_PasswordNoNumber_ExceptionThrown() throws Exception {
        var badParameter = "TestP@ssword";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                "JoshEddie",
                badParameter
            );
        });

        assertEquals(result.getMessage(), badParameter + " was not valid");
    }

    @Test
    public void createLoginView_PasswordNoSpecialCharacter_ExceptionThrown() throws Exception {
        var badParameter = "T3stPassword";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                "JoshEddie",
                badParameter
            );
        });

        assertEquals(result.getMessage(), badParameter + " was not valid");
    }

    @Test
    public void createLoginView_PasswordNoUpperCase_ExceptionThrown() throws Exception {
        var badParameter = "t3stp@ssword";

        var result = assertThrows(Exception.class,
        ()->{
            new loginView(
                "JoshEddie",
                badParameter
            );
        });

        assertEquals(result.getMessage(), badParameter + " was not valid");
    }

}
