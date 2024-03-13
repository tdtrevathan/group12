package group12.project.Repos;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import group12.project.Views.profileView;

@Repository
public interface profileRepo extends MongoRepository<profileView, String> {
    
}
