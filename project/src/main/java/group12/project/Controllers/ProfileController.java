package group12.project.Controllers;

import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import group12.project.ProfileRepo;
import group12.project.Views.profileView;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import org.bson.json.JsonObject;

import org.bson.types.ObjectId;
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
    //for when we connect database
    private ProfileRepo profileRepo;

    @GetMapping("{id}")
    public ResponseEntity<profileView> get(@PathVariable String id) {

        //get profile based on id from db
        //profileView profile = new profileView(
        //    id,
        //    "Timothy",
        //    "My Address",
        //    "",
        //    "Houston", 
        //    "TX", 
        //    "77336");
        var profile = profileRepo.get(id);
        return new ResponseEntity<profileView>(profile, HttpStatus.OK);
    }

    @PostMapping
    public void createProfile(@RequestBody profileView entity) {

        profileRepo.create(entity);
        //send entity to db
    }
    
    @PutMapping("{id}")
    public void editProfile(@PathVariable String id, @RequestBody String entity) {
        //TODO: process PUT request
        
        
    }
}
