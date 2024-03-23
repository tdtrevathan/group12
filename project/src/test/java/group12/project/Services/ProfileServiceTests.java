package group12.project.Services;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Optional;

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
            "1",
            "Timothy",
            "My Address",
            "",
            "Houston", 
            "TX", 
            "77336");

		Mockito.when(repo.findById(profile.getId()))
			.thenReturn(Optional.of(profile));

		var result = profileService.get(profile.getId());

		assertEquals(profile, result);
	}

	@Test
	public void createProfile_ShouldCreateProfile() throws Exception{

		profileView profile = new profileView (
            "1",
            "Timothy",
            "My Address",
            "",
            "Houston", 
            "TX", 
            "77336");

		Mockito.when(repo.insert(profile))
			.thenReturn(profile);
		
		var result = profileService.upsert(profile);
		assertEquals(profile, result);
	}
}