package group12.project.Views;
import java.util.regex.Pattern;

import lombok.Data;

@Data
public class loginView {
    
    private final String username;
    private final String password;

    public loginView(String username, String password) throws InvalidInputException {
        validateUsername(username);
        validatePassword(password);
        this.username = username;
        this.password = password;
    }

    private void validateUsername(String username) throws InvalidInputException {
        if (username == null || username.isEmpty() || username.length() > 50) {
            throw new InvalidInputException("Invalid username: " + username);
        }
    }

    private void validatePassword(String password) throws InvalidInputException {
        if (password == null || password.length() < 8 || password.length() > 50) {
            throw new InvalidInputException("Invalid password length");
        }

        if (!containsSpecialCharacter(password) || !containsNumber(password) || !containsUpperCase(password)) {
            throw new InvalidInputException("Invalid password format");
        }
    }

    private boolean containsSpecialCharacter(String password) {
        return password.matches(".*[!@#$%^&*]+.*");
    }

    private boolean containsNumber(String password) {
        return password.matches(".*\\d+.*");
    }

    private boolean containsUpperCase(String password) {
        return !password.equals(password.toLowerCase());
    }
}

class InvalidInputException extends Exception {
    public InvalidInputException(String message) {
        super(message);
    }
}
