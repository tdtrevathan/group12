package group12.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group12.project.Models.testModel;
import group12.project.Views.testClass;

@Service
public class TestService {
    @Autowired
    private testModel testRepo;

    public List<testClass> getAll(){
        return testRepo.findAll();
    }
}
