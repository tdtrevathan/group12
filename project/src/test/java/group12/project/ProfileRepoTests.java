package group12.project;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import group12.project.Views.profileView;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class ProfileRepoTests {

	ProfileRepo profileRepo = new ProfileRepo();

	@Test
	public void createProfile_ShouldCreateProfile(){

		profileView profile = new profileView(
            "1",
            "Timothy",
            "My Address",
            "",
            "Houston", 
            "TX", 
            "77336");

		profileRepo.create(profile);
		var retrievedProfile = profileRepo.get(profile.getId());

		assertEquals(profile, retrievedProfile);

		profileRepo.delete(profile.getId());
	}
}