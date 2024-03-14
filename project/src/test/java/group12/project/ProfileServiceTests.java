package group12.project;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import group12.project.Repos.profileRepo;
import group12.project.Services.ProfileService;
import group12.project.Views.profileView;

import java.util.Optional;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class ProfileServiceTests {

	@InjectMocks
	ProfileService profileService;

    @Mock
    private profileRepo repo;

	@Test
	public void getProfile_ShouldReturnProfile(){

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
	public void createProfile_ShouldCreateProfile(){

		profileView profile = new profileView(
            "1",
            "Timothy",
            "My Address",
            "",
            "Houston", 
            "TX", 
            "77336");

		Mockito.when(repo.insert(profile))
			.thenReturn(profile);
		
		var result = profileService.create(profile);
		assertEquals(profile, result);
	}
}