package group12.project.Controllers;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import group12.project.Repos.profileRepo;
import group12.project.Services.ProfileService;
import group12.project.Views.profileView;

@SpringBootTest
class ProfileControllerTests {

    @Mock
    private profileRepo repo;

	@Mock
	private ProfileService service;

	@InjectMocks
	ProfileController controller = new ProfileController();


	@Test
	public void getProfileViewWithIdOf1_ShouldReturnDummyData() throws Exception{
		profileView profile = new profileView(
            "Admin",
            "Timothy",
            "My Address",
            "",
            "Houston", 
            "TX", 
            "77336"
		);

		Mockito.when(repo.findByUsername(profile.getUsername()))
		.thenReturn(profile);
		
		Mockito.when(service.get(profile.getUsername()))
			.thenReturn(profile);
		
		var result = controller.get("Admin");

		assertEquals(profile, result.getBody());
	}

	@Test
	public void createProfile_SuccesfullyCreatesProfile() throws Exception{ 
		profileView profile = new profileView(
            "Admin",
            "Timothy",
            "My Address",
            "",
            "Houston", 
            "TX", 
            "77336"
		);
		
		Mockito.when(repo.insert(profile))
			.thenReturn(profile);
		
		Mockito.when(service.upsert(profile))
			.thenReturn(profile);

		var result = controller.createProfile(profile);

		assertEquals(profile, result);

	}
}
