package group12.project.Repos;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import group12.project.Views.profileView;

@Repository
public interface fuelQuoteRepo extends MongoRepository<profileView, String> {
    
}
