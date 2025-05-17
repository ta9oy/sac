package com.app.sac.visits.entiry;

import com.app.sac.guards.entiry.guards;
import com.app.sac.residents.entiry.residents;
import com.app.sac.visitors.entiry.visitors;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
public class visits {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "visitor_id", nullable = false)
    private visitors visitor;

    @ManyToOne
    @JoinColumn(name = "resident_id", nullable = false)
    private residents resident;

    @ManyToOne
    @JoinColumn(name = "guard_id")
    private guards guard;

    private LocalDateTime checkInAt;

    private LocalDateTime checkoutAt;

    @Enumerated(EnumType.STRING)
    private VisitStatus status;

    public enum VisitStatus {
        PENDING, IN, OUT
    }
}

