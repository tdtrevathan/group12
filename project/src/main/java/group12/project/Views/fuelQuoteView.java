package group12.project.Views;
import java.util.Date;

import lombok.Data;

@Data
public class fuelQuoteView {
    
    public fuelQuoteView() {}

    public fuelQuoteView(
        String username,
        String gallons,
        String address,
        String date,
        String rate,
        String total
    )
    {
        this.username = username;
        this.gallons = gallons;
        this.address = address;
        this.date = date;
        this.rate = rate;
        this.total = total;
    }

    private String username;
    private String gallons;
    private String address;
    private String date;
    private String rate;
    private String total;
}
