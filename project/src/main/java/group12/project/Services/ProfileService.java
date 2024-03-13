package group12.project.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group12.project.Repos.profileRepo;
import group12.project.Views.profileView;

@Service
public class ProfileService {
    @Autowired
    private profileRepo repo;

    public profileView get(String id){

        var result = repo.findById(id);

        if(result.get() == null) return new profileView();
        return result.get();
    }

    public profileView create(profileView profile){
        if(profile == null) return null;
        
        return repo.insert(profile);
    }
}
