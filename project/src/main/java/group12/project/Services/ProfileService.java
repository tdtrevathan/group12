package group12.project.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group12.project.Repos.profileRepo;
import group12.project.Views.profileView;

@Service
public class ProfileService {
    @Autowired
    private profileRepo repo;

    public profileView get(String username){

        var result = repo.findByUsername(username);

        if(result == null) return new profileView();
        return result;
    }
    
    //Use this as reference for inserts
    public profileView insert(profileView profile){
        if(profile == null) return null;

        return repo.insert(profile);
    }

    public profileView upsert(profileView profile){
        if(profile == null) return null;

        profileView result = repo.findByUsername(profile.getUsername());

        if(result != null){
            result.setUsername(profile.getUsername());  
            result.setFullName(profile.getFullName());  
            result.setAddress1(profile.getAddress1());
            result.setAddress2(profile.getAddress2());
            result.setCity(profile.getCity());
            result.setState(profile.getState());
            result.setZipcode(profile.getZipcode());
            return repo.save(result);
        }
        else {
            return repo.insert(profile);
        }

    }
}
