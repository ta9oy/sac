package com.app.sac.access_logs.entiry;


import com.app.sac.users.entiry.users;
import com.app.sac.visits.entiry.visits;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
public class access_logs {


    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "visit_id", nullable = false)
    private visits visit;

    @Enumerated(EnumType.STRING)
    private ActionType action;

    @ManyToOne
    @JoinColumn(name = "action_by", nullable = false)
    private users actionBy;

    private LocalDateTime actionAt = LocalDateTime.now();

    public enum ActionType {
        CHECKIN, CHECKOUT
    }
}
