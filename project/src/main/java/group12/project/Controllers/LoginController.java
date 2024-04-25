package group12.project.Controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import group12.project.Services.LoginService;
import group12.project.Views.loginView;

@RestController
@RequestMapping("/api/login/")
public class LoginController {
    
    @Autowired
    private LoginService loginService;

    @PostMapping("/signin")
    public ResponseEntity<Map<String, Boolean>> userLogin(@RequestBody Map<String, String> json) throws Exception {

        Map<String, Boolean> body = new HashMap<>();
        
        try {

            loginView login = new loginView(json.get("username"), json.get("password"));
            var validate = loginService.validateLogin(login);
            body.put("credentials", validate);
        
        }
        catch(Exception error) {
            System.out.println(error.getMessage());
            body.put("credentials", false);
        }

        return new ResponseEntity<>(body, HttpStatus.OK);

    }

    @PostMapping("/signup")
    public loginView createLogin(@RequestBody loginView entity) throws Exception {

        return loginService.create(entity);
    }
}
