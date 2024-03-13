package group12.project.Controllers;

import org.springframework.web.bind.annotation.RestController;

import group12.project.Views.loginView;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/v1/login/")
public class LoginController {
    
    //@Autowired
    //for when we connect database
    //private TestService testService;

    @GetMapping("{userId}")
    public ResponseEntity<loginView> get(@PathVariable String userId) {
        //TODO: process GET request

        return null;
    }

    @PostMapping
    public String createProfile(@RequestBody loginView entity) {
        //TODO: process POST request
        
        return null;
    }
}
