package group12.project.Controllers;

import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import group12.project.Services.ProfileService;
import group12.project.Views.profileView;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import org.bson.json.JsonObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {
    
    @Autowired
    private ProfileService profileService;

    @GetMapping("{username}")
    public ResponseEntity<profileView> get(@PathVariable String username) throws Exception {

        // var profile = profileService.get(username);
        profileView profile = new profileView(
            "Admin",
            "Timothy",
            "333 Fake Address Avenue",
            "",
            "Houston", 
            "TX", 
            "77336"
		);

        return new ResponseEntity<profileView>(profile, HttpStatus.OK);
    }

    @PostMapping
    public profileView createProfile(@RequestBody profileView entity) {

        return profileService.upsert(entity);
    }
}
