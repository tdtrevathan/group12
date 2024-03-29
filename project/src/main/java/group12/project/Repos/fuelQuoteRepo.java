package group12.project.Repos;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import group12.project.Views.fuelQuoteView;

@Repository
public interface fuelQuoteRepo extends MongoRepository<fuelQuoteView, String> {
    List<fuelQuoteView> findByUsername(String username);
}
