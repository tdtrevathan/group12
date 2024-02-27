package group12.project.Models;


import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import group12.project.Views.testClass;

@Repository
public interface testModel extends MongoRepository<testClass, ObjectId> {
    
}
