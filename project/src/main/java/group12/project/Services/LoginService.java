package group12.project.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import group12.project.Repos.loginRepo;
import group12.project.Views.loginView;
import group12.project.Views.loginViewEncrypted;

@Service
public class LoginService {
    @Autowired
    private loginRepo repo;

    public Boolean validateLogin(loginView login) throws Exception {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        var result = repo.findByUsername(login.getUsername());
        var resultPass = result.getPassword();
        var loginPass = login.getPassword();
        
        if(result == null || !encoder.matches(loginPass, resultPass)) {
            return false;
        }

        return true;
    }

    public loginView create(loginView login) throws Exception {
        if(login == null) return null;

        loginViewEncrypted loginEncrypted = new loginViewEncrypted(login.getUsername(), login.getPassword());
        loginEncrypted.encryptPassword();

        System.out.println(loginEncrypted.getPassword());
        if(repo.findByUsername(loginEncrypted.getUsername()) != null) {
            return new loginView("invalid", "Errorp@55");
        }

        repo.insert(loginEncrypted);
        
        return login;
    }
}
