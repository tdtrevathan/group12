package group12.project.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group12.project.PricingModule;
import group12.project.Repos.fuelQuoteRepo;
import group12.project.Views.fuelQuoteView;

import java.util.Collections;
import java.util.Comparator;

@Service
public class FuelQuoteService {

    @Autowired
    private fuelQuoteRepo repo;
    
    public List<fuelQuoteView> getHistory(String username) throws Exception {

        List<fuelQuoteView> quoteHistory = repo.findByUsername(username);    

        Collections.sort(quoteHistory, new Comparator<fuelQuoteView>() {
            @Override
            public int compare(fuelQuoteView f1, fuelQuoteView f2) {
                return f1.getDate().compareTo(f2.getDate());
            }
        });

        return quoteHistory;
    }

    public fuelQuoteView getQuoteWithRateTotal(fuelQuoteView fuelQuote) throws Exception {

        List<fuelQuoteView> quoteHistory = repo.findByUsername(fuelQuote.getUsername());   

        PricingModule pricingModule = new PricingModule(fuelQuote, quoteHistory.size() > 0 ? true : false);

        fuelQuote.setRate(pricingModule.getRate().toString());
        fuelQuote.setTotal(pricingModule.getTotal().toString());
        
        return fuelQuote;
    }

    public fuelQuoteView insert(fuelQuoteView fuelQuote) {
        if(fuelQuote == null) return null;
        return repo.insert(fuelQuote);
    }

    
}
