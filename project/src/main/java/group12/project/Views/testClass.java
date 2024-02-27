package group12.project.Views;

import java.util.Date;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.annotation.*;

@Document(collection = "sales")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class testClass {
    @Id
    private ObjectId id;
    private String item;
    private Double price;
    private Number quantity;
    private Date date;
    private Integer intid;
}
