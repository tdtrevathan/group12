package group12.project.Controllers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import group12.project.Repos.fuelQuoteRepo;
import group12.project.Services.FuelQuoteService;
import group12.project.Views.fuelQuoteView;

@SpringBootTest
public class FuelQuoteControllerTests {

    @Mock
    private fuelQuoteRepo repo;

    @Mock
    private FuelQuoteService service;

    @InjectMocks
    FuelQuoteController controller = new FuelQuoteController();

    @Test
    public void getAll_results() throws Exception {

        String username = "Admin";

        List<fuelQuoteView> quoteHistory = new ArrayList<>();
        quoteHistory.add(new fuelQuoteView("Admin", "1.00", "333 Fake Address Avenue", "01-05-2020", "3.55", "100.00"));
        quoteHistory.add(new fuelQuoteView("Admin", "5.00", "1234 Not Real Blvd", "11-23-1965", "0.55", "250.00"));
        quoteHistory.add(new fuelQuoteView("Admin", "2.00", "88 Main Street", "04-12-2001", "2.00", "4.00"));   
        
        Mockito.when(service.getHistory(username))
            .thenReturn(quoteHistory);

        var result = controller.getAll(username);

        assertEquals(quoteHistory, result.getBody());

    }

    @Test
    public void getQuote_quoteReturned() throws Exception {

        fuelQuoteView fuelQuote = new fuelQuoteView(
            "Admin",
            "1.00",
            "333 Fake Address Avenue",
            "01-05-2020",
            "3.55",
            "100.00"
            );

        Mockito.when(service.getQuoteWithRateTotal(fuelQuote))
            .thenReturn(fuelQuote);

        var result = controller.getQuote(fuelQuote);

        assertEquals(fuelQuote, result.getBody());

    }

    @Test
    public void submitQuote_quoteSubmitted() throws Exception {

        fuelQuoteView fuelQuote = new fuelQuoteView(
            "Admin",
            "1.00",
            "333 Fake Address Avenue",
            "01-05-2020",
            "3.55",
            "100.00"
            );

        Mockito.when(service.insert(fuelQuote))
            .thenReturn(fuelQuote);

        var result = controller.submitQuote(fuelQuote);

        assertEquals(fuelQuote, result);

    }
    
}
