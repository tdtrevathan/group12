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
        String total) throws Exception
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
    
    private boolean isGallonsValid(String inputGallons){
        if(inputGallons.length() == 0 || inputGallons.startsWith("-")) return false;
        /*check if gallons is greater than 0 */
        return true;
    }
    private boolean isDateValid(String inputDate){
        if(inputDate.length() == 0) return false;
        return true;
    }
}
