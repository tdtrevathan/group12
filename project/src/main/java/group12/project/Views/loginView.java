package group12.project.Views;

import lombok.Data;

@Data
public class loginView {
    
    private final String username;
    private final String password;

    public loginView(String username, String password) throws Exception {
        validateUsername(username);
        validatePassword(password);
        this.username = username;
        this.password = password;
    }

    private void validateUsername(String username) throws Exception {
        if (username == null || username.isEmpty() || username.length() > 50) {
            throw new Exception("Invalid username: " + username);
        }
    }

    private void validatePassword(String password) throws Exception {
        if (password == null || password.length() < 8 || password.length() > 50) {
            throw new Exception("Invalid password length: " + password);
        }

        if (!containsSpecialCharacter(password) || !containsNumber(password) || !containsUpperCase(password)) {
            throw new Exception("Invalid password format: " + password);
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