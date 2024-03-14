package group12.project.Views;
import lombok.Data;

@Data
public class loginView {
    
    public loginView() {}

    public loginView(
        String userName,
        String password
    )
    {
        this.userName = userName;
        this.password = password;
    }

    private String userName;
    private String password;
}
