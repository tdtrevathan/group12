package group12.project.Views;
import java.util.Date;

import lombok.Data;

@Data
public class fuelQuoteView {
    
    public fuelQuoteView() {}

    public fuelQuoteView(
        double gallons,
        String address,
        Date date,
        double rate,
        double total,
        String userId
    )
    {
        this.gallons = gallons;
        this.address = address;
        this.date = date;
        this.rate = rate;
        this.total = total;
        this.userId = userId;
    }

    private double gallons;
    private String address;
    private Date date;
    private double rate;
    private double total;
    private String userId;
}
