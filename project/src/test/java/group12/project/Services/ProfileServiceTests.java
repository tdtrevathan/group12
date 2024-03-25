package group12.project.Services;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import group12.project.Repos.profileRepo;
import group12.project.Views.profileView;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class ProfileServiceTests {

	@InjectMocks
	ProfileService profileService;

    @Mock
    private profileRepo repo;

	@Test
	public void getProfile_ShouldReturnProfile() throws Exception{

		profileView profile = new profileView(
            "Admin",
            "Timothy",
            "My Address",
            "",
            "Houston", 
            "TX", 
            "77336");

		Mockito.when(repo.findByUsername(profile.getUsername()))
			.thenReturn(profile);

		var result = profileService.get(profile.getUsername());

		assertEquals(profile, result);
	}

	@Test
	public void createProfile_ShouldCreateProfile() throws Exception{

		profileView profile = new profileView (
            "Admin",
            "Timothy",
            "My Address",
            "",
            "Houston", 
            "TX", 
            "77336");

		Mockito.when(repo.findByUsername(profile.getUsername()))
			.thenReturn(profile);

		Mockito.when(repo.save(profile))
			.thenReturn(profile);
		
		var result = profileService.upsert(profile);
		assertEquals(profile, result);
	}

	@Test
	public void updatedProfileElement_ShouldBeUpdated() throws Exception{

		profileView profile = new profileView (
            "Admin",
            "Timothy",
            "My Address",
            "",
            "Houston", 
            "TX", 
            "77336");

		Mockito.when(repo.findByUsername(profile.getUsername()))
			.thenReturn(profile);
		
		Mockito.when(repo.save(profile))
			.thenReturn(profile);
			
		profile.setFullName("Jimothy");
		
		var result = profileService.upsert(profile);
		assertEquals(profile.getFullName(), result.getFullName());
	}
}