package group12.project.Controllers;

import org.springframework.web.bind.annotation.RestController;

import group12.project.TestService;
import group12.project.Views.testClass;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/api/v1/sales")
public class TestController {
    
    @Autowired
    private TestService testService;

    @GetMapping
    public ResponseEntity<List<testClass>> getAll() {
        return new ResponseEntity<List<testClass>>(testService.getAll(), HttpStatus.OK);
    }
}
