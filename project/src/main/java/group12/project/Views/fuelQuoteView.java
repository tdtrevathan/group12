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
<<<<<<< Updated upstream
        String date,
        String rate,
        String total
    )
    {
        this.username = username;
=======
        Date date,
        double rate,
        double total,
        String userId
    ) throws Exception
    {
        if(isGallonsValid(gallons)){
            this.gallons = gallons;
        }
        else{
            throw new Exception(gallons + "was not valid");
        }
        if(isDateValid(date)){
            this.date = date;
        }
        else{
            throw new Exception(date + "was not valid");
        }
>>>>>>> Stashed changes
        this.gallons = gallons;
        this.address = address;
        this.date = date;
        this.rate = rate;
        this.total = total;
    }

    private String username;
    private String gallons;
    private String address;
<<<<<<< Updated upstream
    private String date;
    private String rate;
    private String total;
=======
    private Date date;
    private double rate;
    private double total;
    private String userId;

    private boolean isGallonsValid(double inputGallons){
        if(inputGallons <=0 || inputGallons == 0) return false;
        return true;
    }
    private boolean isDateValid(date inputDate){
        if(!inputDate) return false;
        return true;
    }
>>>>>>> Stashed changes
}
