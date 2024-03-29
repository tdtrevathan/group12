package group12.project.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import group12.project.Services.ProfileService;
import group12.project.Views.profileView;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {
    
    @Autowired
    private ProfileService profileService;

    @GetMapping("{username}")
    public ResponseEntity<profileView> get(@PathVariable String username) throws Exception {

        var profile = profileService.get(username);

        return new ResponseEntity<profileView>(profile, HttpStatus.OK);
    }

    @PostMapping
    public profileView createProfile(@RequestBody profileView entity) {

        if(entity.getUsername() == null) {
            return entity;
        }
        
        return profileService.upsert(entity);
    }
}
