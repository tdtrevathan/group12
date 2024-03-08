package group12.project.Models;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import group12.project.Views.profileView;

@Repository
public interface profileModel extends MongoRepository<profileView, String> {
    
}
