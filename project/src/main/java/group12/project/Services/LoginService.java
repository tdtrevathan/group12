package group12.project.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group12.project.Repos.loginRepo;
import group12.project.Views.loginView;

@Service
public class LoginService {
    @Autowired
    private loginRepo repo;

    public loginView get(String username, String password){

        //var result = repo.findById(id);

        //if(result.get() == null) return new loginView();
        //return result.get();

        return new loginView("user", "Pa$$word22");
    }

    public loginView create(loginView login){
        if(login == null) return null;
        
        return repo.insert(login);
    }
}
