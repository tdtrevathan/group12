package group12.project.Views;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import group12.project.Views.fuelQuoteView;

@SpringBootTest

public class fuelQuoteTest {
    @Test
	public void createFuelQuoteView_valuesAreSetCorrectly() throws Exception{
		fuelQuoteView fuelQuote = new fuelQuoteView(
            gallons:"10",
            date: "2024-03-12"
		);

		assertEquals("10", fuelQuote.getGallons());
		assertEquals("2024-03-12", fuelQuote.getDate());
		
	}

    @Test
	public void createFuelQuoteView_GallonsEmpty_ExceptionThrown() throws Exception{
		var badParameter = "";
		
		var result = assertThrows(Exception.class,
		()->{
			new fuelQuoteView(
				badParameter,
                date:"2024-02-14"
				
			);
		});

		assertEquals(result.getMessage(), badParameter + "was not valid");
	}
    
}
