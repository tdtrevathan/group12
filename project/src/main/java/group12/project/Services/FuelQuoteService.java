package group12.project.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group12.project.PricingModule;
import group12.project.Repos.fuelQuoteRepo;
import group12.project.Views.fuelQuoteView;

@Service
public class FuelQuoteService {

    @Autowired
    private fuelQuoteRepo repo;
    PricingModule pricingModule = new PricingModule();
    
    public List<fuelQuoteView> getHistory(String username) throws Exception {

        List<fuelQuoteView> quoteHistory = repo.findByUsername(username);    

        return quoteHistory;
    }

    public fuelQuoteView getQuoteWithRateTotal(fuelQuoteView fuelQuote) throws Exception {

        List<fuelQuoteView> quoteHistory = repo.findByUsername(fuelQuote.getUsername());   

        Double rate = pricingModule.calculateRate(fuelQuote, quoteHistory.size() > 0 ? true : false);
        Double total = pricingModule.calculateTotal(rate, fuelQuote.getGallons());

        return new fuelQuoteView(
            fuelQuote.getUsername(),
            fuelQuote.getGallons(),
            fuelQuote.getAddress(),
            fuelQuote.getDate(),
            rate.toString(),
            total.toString()
        );
    }

    public fuelQuoteView insert(fuelQuoteView fuelQuote) {
        if(fuelQuote == null) return null;
        return repo.insert(fuelQuote);
    }

    
}
