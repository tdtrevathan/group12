package group12.project.Services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group12.project.PricingModule;
import group12.project.Repos.fuelQuoteRepo;
import group12.project.Views.fuelQuoteView;

@Service
public class FuelQuoteService {

    @Autowired
    private fuelQuoteRepo repo;

    public List<fuelQuoteView> getHistory(String username) {

        List<fuelQuoteView> quoteHistory = new ArrayList<>();
        quoteHistory.add(new fuelQuoteView("Admin", "1.00", "333 Fake Address Avenue", "01-05-2020", "3.55", "100.00"));
        quoteHistory.add(new fuelQuoteView("Admin", "5.00", "1234 Not Real Blvd", "11-23-1965", "0.55", "250.00"));
        quoteHistory.add(new fuelQuoteView("Admin", "2.00", "88 Main Street", "04-12-2001", "2.00", "4.00"));

        // List<JSONObject> entities = new ArrayList<JSONObject>();
        // for (fuelQuoteView quote : quoteHistory) {
        //     JSONObject entity = new JSONObject();
        //     entity.put("username", quote.getUsername());
        //     entity.put("gallons", quote.getGallons());
        //     entity.put("address", quote.getAddress());
        //     entity.put("date", quote.getDate());
        //     entity.put("rate", quote.getRate());
        //     entity.put("total", quote.getTotal());
        //     entities.add(entity);
        // }        

        return quoteHistory;
    }

    public fuelQuoteView getRateTotal(fuelQuoteView fuelQuote) {

        Double rate = PricingModule.calculateRate(fuelQuote);
        Double total = PricingModule.calculateTotal(rate, fuelQuote.getGallons());

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

        // return repo.insert(fuelQuote);
        return fuelQuote;
    }

    
}
