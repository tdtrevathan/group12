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
    
    //Use this as reference for inserts
    public profileView insert(profileView profile){
        if(profile == null) return null;

        return repo.insert(profile);
    }

    public profileView upsert(profileView profile){
        if(profile == null) return null;


        var result = repo.findById(profile.getId()).get();

        if(result != null){
            result.setFullName(profile.getFullName());  
            result.setAddress1(profile.getAddress1());
            result.setAddress2(profile.getAddress2());
            result.setCity(profile.getCity());
            result.setState(profile.getState());
            result.setZipcode(profile.getZipcode());

            repo.save(result);
        }

        return repo.save(profile);
    }
}
