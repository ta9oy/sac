package com.app.sac.residents.entiry;

import com.app.sac.users.entiry.users;
import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Entity
@Data
public class residents {

    @Id
    @GeneratedValue
    private UUID id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private users user;

    private String fullName;
    private String phone;
    private String apartmentNumber;
}
