package group12.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.bson.types.ObjectId;

import group12.project.Models.profileModel;
import group12.project.Models.testModel;
import group12.project.Views.profileView;
import group12.project.Views.testClass;

@Service
public class ProfileRepo {
    @Autowired
    private profileModel repo;

    public profileView get(String id){

        var result = repo.findById("65e9eca2a9308d1be0c7c94c");

        if(result == null) return new profileView();
        return result.get();
    }

    public void create(profileView profile){
        repo.insert(profile);
    }
}
