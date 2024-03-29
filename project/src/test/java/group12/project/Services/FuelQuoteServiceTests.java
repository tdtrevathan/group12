package group12.project.Services;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import group12.project.PricingModule;
import group12.project.Repos.fuelQuoteRepo;
import group12.project.Views.fuelQuoteView;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class FuelQuoteServiceTests {
    
    @InjectMocks
    FuelQuoteService fuelQuoteService;

    @Mock
    private fuelQuoteRepo repo;

    @Test
    public void getHistory_returnsData() throws Exception {

        String username = "Admin";

        List<fuelQuoteView> quoteHistory = new ArrayList<>();
        quoteHistory.add(new fuelQuoteView("Admin", "1.00", "333 Fake Address Avenue", "01-05-2020", "3.55", "100.00"));
        quoteHistory.add(new fuelQuoteView("Admin", "5.00", "1234 Not Real Blvd", "11-23-1965", "0.55", "250.00"));
        quoteHistory.add(new fuelQuoteView("Admin", "2.00", "88 Main Street", "04-12-2001", "2.00", "4.00"));  

        Mockito.when(repo.findByUsername(username))
            .thenReturn(quoteHistory);

        var result = fuelQuoteService.getHistory(username);

        assertEquals(quoteHistory, result);

    }

    @Test
    public void getQuoteWithRateTotal_ShouldReturnQuote() throws Exception {

        fuelQuoteView fuelQuote = new fuelQuoteView(
            "Admin",
            "999",
            "333 Fake Address Avenue Houston, TX 77336",
            "03-28-2024",
            "1.71",
            "1708.29"
            );

        Mockito.when(repo.findByUsername(fuelQuote.getUsername()))
            .thenReturn(new ArrayList<>());

        MockedStatic<PricingModule> pricingModule = Mockito.mockStatic(PricingModule.class);
        pricingModule.when(() -> PricingModule.calculateRate(fuelQuote, false))
            .thenReturn(1.71);

        pricingModule.when(() -> PricingModule.calculateTotal(1.71, fuelQuote.getGallons()))
            .thenReturn(1708.29);

        var result = fuelQuoteService.getQuoteWithRateTotal(fuelQuote);

        assertEquals(fuelQuote, result);

    }

    @Test
    public void insert_shouldReturnQuote() throws Exception {
        
        fuelQuoteView fuelQuote = new fuelQuoteView(
            "Admin",
            "999",
            "333 Fake Address Avenue Houston, TX 77336",
            "03-28-2024",
            "1.71",
            "1708.29"
            );

        Mockito.when(repo.insert(fuelQuote))
            .thenReturn(fuelQuote);

        var result = fuelQuoteService.insert(fuelQuote);

        assertEquals(fuelQuote, result);

        
    }


}
