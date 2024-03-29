package group12.project.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group12.project.Repos.loginRepo;
import group12.project.Views.loginView;

@Service
public class LoginService {
    @Autowired
    private loginRepo repo;

    public Boolean validateLogin(loginView login) throws Exception {

        var result = repo.findByUsername(login.getUsername());

        var resultPass = result.getPassword();
        var loginPass = login.getPassword();

        if(result == null || !loginPass.equals(resultPass)) {
            return false;
        }

        return true;
    }

    public loginView create(loginView login){
        if(login == null) return null;

        if(repo.findByUsername(login.getUsername()) != null) return null;
        
        return repo.insert(login);
    }
}
