package group12.project.Views;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import group12.project.Views.fuelQuoteView;

@SpringBootTest

public class fuelQuoteViewTests {
    @Test
	public void createFuelQuoteView_valuesAreSetCorrectly() throws Exception{
		fuelQuoteView fuelQuote = new fuelQuoteView(
            "",
            "10",
            "",
            "2024-03-12",
            "",
            ""
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
                "",
				badParameter,
                "",
                "2024-02-14",
                "",
                ""

				
			);
		});

		assertEquals(result.getMessage(), badParameter + "was not valid");
	}
    @Test
	public void createFuelQuoteView_GallonsNegative_ExceptionThrown() throws Exception{
		var badParameter = "-10";
		
		var result = assertThrows(Exception.class,
		()->{
			new fuelQuoteView(
                "",
				badParameter,
                "",
                "2024-02-14",
                "",
                ""

				
			);
		});

		assertEquals(result.getMessage(), badParameter + "was not valid");
	}
    @Test
	public void createFuelQuoteView_GallonsZero_ExceptionThrown() throws Exception{
		var badParameter = "0";
		
		var result = assertThrows(Exception.class,
		()->{
			new fuelQuoteView(
                "",
				badParameter,
                "",
                "2024-02-14",
                "",
                ""

				
			);
		});

		assertEquals(result.getMessage(), badParameter + "was not valid");
	}
   
    @Test
	public void createFuelQuoteView_DateEmpty_ExceptionThrown() throws Exception{
		var badParameter = "";
		
		var result = assertThrows(Exception.class,
		()->{
			new fuelQuoteView(
                "",
				"10",
                "",
                badParameter,
                "",
                ""

				
			);
		});

		assertEquals(result.getMessage(), badParameter + "was not valid");
	}
    
}
