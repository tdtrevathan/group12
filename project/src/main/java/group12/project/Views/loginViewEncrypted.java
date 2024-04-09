package group12.project.Views;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import lombok.Data;


@Data
public class loginViewEncrypted {
    
    private final String username;
    private String password;

    public loginViewEncrypted(String username, String password) throws Exception {
        this.username = username;
        this.password = password;
    }

    public void encryptPassword(){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        this.password = encoder.encode(password);
    }
}