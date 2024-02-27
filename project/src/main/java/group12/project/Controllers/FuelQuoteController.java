package group12.project.Controllers;

import org.springframework.web.bind.annotation.RestController;

import group12.project.Views.fuelQuoteView;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

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
@RequestMapping("/api/v1/fuelQuote/")
public class FuelQuoteController {
    
    //@Autowired
    //for when we connect database
    //private TestService testService;

    @GetMapping("{id}")
    public ResponseEntity<fuelQuoteView> getAll(@PathVariable String userId) {
        //TODO: process GET request

        return null;
    }

    @PostMapping
    public String createQuote(@RequestBody String entity) {
        //TODO: process POST request
        
        return null;
    }
}
