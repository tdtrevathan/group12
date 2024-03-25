package group12.project.Views;
import lombok.Data;

@Data
public class profileView {

    public profileView(){}
    
    public profileView(
    String username,
    String fullName,
    String address1,
    String address2,
    String city,
    String state,
    String zipcode) throws Exception
    {
        this.username = username;

        if(isFirstNameValid(fullName)){
            this.fullName = fullName;
        }
        else{
            throw new Exception(fullName + "was not valid");
        }
        if(isAddress1Valid(address1)){
            this.address1 = address1;
        }
        else{
            throw new Exception(address1 + "was not valid");
        }
        if(isAddress2Valid(address2)){
            this.address2 = address2;
        }
        else{
            throw new Exception(address2 + "was not valid");
        }
        if(isCityValid(city)){
            this.city = city;
        }
        else{
            throw new Exception(city + "was not valid");
        }
        if(isStateValid(state)){
            this.state = state;
        }
        else{
            throw new Exception(state + "was not valid");
        }
        if(isZipcodeValid(zipcode)){
            this.zipcode = zipcode;
        }
        else{
            throw new Exception(zipcode + "was not valid");
        }
    }

    private String username;
    private String fullName;
    private String address1;
    private String address2;
    private String city;
    private String state;
    private String zipcode;

    private boolean isFirstNameValid(String inputFullName){
        if(inputFullName.length() > 60 || inputFullName.length() == 0) return false;
        return true;
    }

    private boolean isAddress1Valid(String inputAddress){
        if(inputAddress.length() > 100 || inputAddress.length() == 0) return false;
        return true;
    }

    private boolean isAddress2Valid(String inputAddress){
        if(inputAddress.length() > 100) return false;
        return true;
    }

    private boolean isCityValid(String inputCity){
        if(inputCity.length() > 100 || inputCity.length() == 0) return false;
        return true;
    }

    private boolean isStateValid(String inputState){
        if(inputState.length() > 2 || inputState.length() == 0) return false;
        return true;
    }

    private boolean isZipcodeValid(String inputZipcode){
        if(inputZipcode.length() > 9 || inputZipcode.length() < 5) return false;
        
        for(int i = 0; i < inputZipcode.length(); i++){
            if(!Character.isDigit(inputZipcode.charAt(i))) return false;
        }

        return true;
    }
}
