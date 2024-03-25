package group12.project.Views;
import lombok.Data;

@Data
public class loginView {
    
    public loginView() {}

    public loginView(
        String username,
        String password
    )
    {
        this.username = username;
        this.password = password;
    }

    private String username;
    private String password;
}