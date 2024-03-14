package group12.project;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import group12.project.Controllers.ProfileController;
import group12.project.Repos.profileRepo;
import group12.project.Views.profileView;
import group12.project.Services.ProfileService;

@SpringBootTest
class ProfileControllerTests {

    @Mock
    private profileRepo repo;

	@Mock
	private ProfileService service;

	@InjectMocks
	ProfileController controller = new ProfileController();


	@Test
	public void getProfileViewWithIdOf1_ShouldReturnDummyData(){
		profileView profile = new profileView(
            "1",
            "Timothy",
            "My Address",
            "",
            "Houston", 
            "TX", 
            "77336"
		);

		Mockito.when(repo.findById(profile.getId()))
		.thenReturn(Optional.of(profile));
		
		Mockito.when(service.get(profile.getId()))
			.thenReturn(profile);
		
		var result = controller.get("1");

		assertEquals(profile, result.getBody());
	}

	@Test
	public void createProfile_SuccesfullyCreatesProfile(){
		profileView profile = new profileView(
            "1",
            "Timothy",
            "My Address",
            "",
            "Houston", 
            "TX", 
            "77336"
		);
		
		Mockito.when(repo.insert(profile))
			.thenReturn(profile);
		
		Mockito.when(service.create(profile))
			.thenReturn(profile);

		var result = controller.createProfile(profile);

		assertEquals(profile, result);

	}
}
