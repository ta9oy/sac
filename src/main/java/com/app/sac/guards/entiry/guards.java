package com.app.sac.guards.entiry;


import com.app.sac.users.Users;
import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Entity
@Data
public class guards {

    @Id
    @GeneratedValue
    private UUID id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users user;

    private String fullName;
    private String shift;
}
