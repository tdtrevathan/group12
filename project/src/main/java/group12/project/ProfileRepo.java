package group12.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group12.project.Models.profileModel;
import group12.project.Views.profileView;

@Service
public class ProfileRepo {
    @Autowired
    private profileModel repo;

    public profileView get(String id){

        var result = repo.findById(id);

        if(result == null) return new profileView();
        return result.get();
    }

    public void create(profileView profile){
        repo.insert(profile);
    }

    public void delete(String id){
        repo.deleteById(id);
    }
}
