package group12.project.Views;

import java.util.regex.Pattern;
import java.util.regex.Matcher;

import org.bson.types.ObjectId;

import lombok.Data;

@Data
public class loginView {
    
    public loginView() {}

    public loginView(
        String username,
        String password
    ) throws Exception {

        if(isUsernameValid(username)) {
            this.username = username;
        }
        else {
            throw new Exception(username + " was not valid");
        }

        if(isPasswordValid(password)) {
        this.password = password;
        }
        else {
            throw new Exception(password + " was not valid");
        }
    }

    public loginView(
        ObjectId id,
        String username,
        String password
    ) throws Exception {
        this(username, password);
        this.id = id;
    }

    private ObjectId id;
    private String username;
    private String password;

    private boolean isUsernameValid(String username) {
        if(username.length() > 50 || username.length() == 0) return false;
        return true;
    }

    private boolean isPasswordValid(String password) {
        if(password.length() > 50 || password.length() < 8) return false;

        String regex = "(^.*[0-9]+.*$)";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(password);
        if(!matcher.matches()) return false;

        regex = "(^.*[!@#$%^&*]+.*$)";
        pattern = Pattern.compile(regex);
        matcher = pattern.matcher(password);
        if(!matcher.matches()) return false;

        if(password.toLowerCase() == password) return false;

        return true;
    }
}
