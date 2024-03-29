package group12.project.Controllers;

import org.springframework.web.bind.annotation.RestController;

import group12.project.Services.FuelQuoteService;
import group12.project.Views.fuelQuoteView;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/fuelQuote/")
public class FuelQuoteController {
    
    @Autowired
    private FuelQuoteService fuelQuoteService;

    @GetMapping("{username}")
    public ResponseEntity<List<fuelQuoteView>> getAll(@PathVariable String username) throws Exception {

        List<fuelQuoteView> quoteHistory = fuelQuoteService.getHistory(username);

        return ResponseEntity.ok(quoteHistory);
    }

    @PostMapping("/getQuote")
    public ResponseEntity<fuelQuoteView> getQuote(@RequestBody fuelQuoteView entity) throws Exception {
        fuelQuoteView fuelQuote = fuelQuoteService.getQuoteWithRateTotal(entity);
        return new ResponseEntity<fuelQuoteView>(fuelQuote, HttpStatus.OK);
    }
    
    @PostMapping("/submitQuote")
    public fuelQuoteView submitQuote(@RequestBody fuelQuoteView entity) {
        return fuelQuoteService.insert(entity);
    }
}
