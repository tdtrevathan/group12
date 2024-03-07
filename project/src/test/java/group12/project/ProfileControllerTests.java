package group12.project;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import group12.project.Controllers.ProfileController;

@SpringBootTest
class ProfileControllerTests {

	ProfileController controller = new ProfileController();

	@Test
	public void getProfileViewWithIdOf1_ShouldReturnDummyData(){
		var result = controller.get("1");

		assertEquals("1", result.getBody().getId());
		assertEquals("Timothy", result.getBody().getFullName());
		assertEquals("My Address", result.getBody().getAddress1());
		assertEquals("", result.getBody().getAddress2());
		assertEquals("Houston", result.getBody().getCity());
		assertEquals("TX", result.getBody().getState());
		assertEquals("77336", result.getBody().getZipcode());
	}
}
