package group12.project;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.runner.RunWith;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import group12.project.Controllers.ProfileController;

@SpringBootTest
@With(SpringJUnit4ClassRunner.class)
class ProfileControllerTests {

	ProfileController controller = new ProfileController();

	@Test
	public void contextLoads() {
	}

	@Test
	public void fakeTest(){

	}

}