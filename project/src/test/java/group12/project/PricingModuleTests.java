package group12.project;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import group12.project.Views.fuelQuoteView;

@SpringBootTest
public class PricingModuleTests {
    
    PricingModule pricingModule = new PricingModule();

    @Test
    public void calculateRate_InState_NoHistory_LessThanOrEqual1000Gallons() throws Exception {

        fuelQuoteView fuelQuote = new fuelQuoteView(
            "Admin",
            "1000",
            "333 Fake Address Avenue Houston, TX 77336",
            "03-28-2024",
            "",
            ""
        );

        var result = pricingModule.calculateRate(fuelQuote, false);

        assertEquals(1.73, result);

    }

    @Test
    public void calculateRate_InState_History_LessThanOrEqual1000Gallons() throws Exception {

        fuelQuoteView fuelQuote = new fuelQuoteView(
            "Admin",
            "1000",
            "333 Fake Address Avenue Houston, TX 77336",
            "03-28-2024",
            "",
            ""
        );

        var result = pricingModule.calculateRate(fuelQuote, true);

        assertEquals(1.71, result);

    }

    @Test
    public void calculateRate_InState_NoHistory_GreaterThan1000Gallons() throws Exception {

        fuelQuoteView fuelQuote = new fuelQuoteView(
            "Admin",
            "1001",
            "333 Fake Address Avenue Houston, TX 77336",
            "03-28-2024",
            "",
            ""
        );

        var result = pricingModule.calculateRate(fuelQuote, false);

        assertEquals(1.71, result);

    }

    @Test
    public void calculateRate_InState_History_GreaterThan1000Gallons() throws Exception {

        fuelQuoteView fuelQuote = new fuelQuoteView(
            "Admin",
            "1001",
            "333 Fake Address Avenue Houston, TX 77336",
            "03-28-2024",
            "",
            ""
        );

        var result = pricingModule.calculateRate(fuelQuote, true);

        assertEquals(1.7, result);

    }

    @Test
    public void calculateRate_OutOfState_NoHistory_LessThanOrEqual1000Gallons() throws Exception {

        fuelQuoteView fuelQuote = new fuelQuoteView(
            "Admin",
            "1000",
            "333 Fake Address Avenue New York, NY 77336",
            "03-28-2024",
            "",
            ""
        );

        var result = pricingModule.calculateRate(fuelQuote, false);

        assertEquals(1.76, result);

    }

    @Test
    public void calculateRate_OutOfState_History_LessThanOrEqual1000Gallons() throws Exception {

        fuelQuoteView fuelQuote = new fuelQuoteView(
            "Admin",
            "1000",
            "333 Fake Address Avenue New York, NY 77336",
            "03-28-2024",
            "",
            ""
        );

        var result = pricingModule.calculateRate(fuelQuote, true);

        assertEquals(1.74, result);

    }

    @Test
    public void calculateRate_OutOfState_NoHistory_GreaterThan1000Gallons() throws Exception {

        fuelQuoteView fuelQuote = new fuelQuoteView(
            "Admin",
            "1001",
            "333 Fake Address Avenue New York, NY 77336",
            "03-28-2024",
            "",
            ""
        );

        var result = pricingModule.calculateRate(fuelQuote, false);

        assertEquals(1.74, result);

    }

    @Test
    public void calculateRate_OutOfState_History_GreaterThan1000Gallons() throws Exception {

        fuelQuoteView fuelQuote = new fuelQuoteView(
            "Admin",
            "1001",
            "333 Fake Address Avenue New York, NY 77336",
            "03-28-2024",
            "",
            ""
        );

        var result = pricingModule.calculateRate(fuelQuote, true);

        assertEquals(1.73, result);

    }

}
