package com.app.sac.visitors.entiry;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.UUID;

@Entity
@Data
public class visitors {

    @Id
    @GeneratedValue
    private UUID id;

    private String fullName;
    private String phone;
    private String idType;
    private String idNumber;
    private String photoPath;
}
