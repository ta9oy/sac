package com.app.sac.users.entiry;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Entity
@Data
public class Users {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String passwordHash;

    @Enumerated(EnumType.STRING)
    private Role role;

    private String status = "ACTIVE";

    public enum Role {
        ADMIN, RESIDENT, GUARD
    }

    private String phoneNumber;
}
