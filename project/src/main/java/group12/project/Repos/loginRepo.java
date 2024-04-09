package group12.project.Repos;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import group12.project.Views.loginViewEncrypted;

@Repository
public interface loginRepo extends MongoRepository<loginViewEncrypted, String> {
    loginViewEncrypted findByUsername(String username);
}