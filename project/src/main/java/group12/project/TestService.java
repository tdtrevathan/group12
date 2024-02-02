package group12.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestService {
    @Autowired
    private TestRepo testRepo;

    public List<testClass> getAll(){
        return testRepo.findAll();
    }
}
