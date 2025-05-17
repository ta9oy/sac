package com.app.sac.visitor_approvals.entiry;

import com.app.sac.residents.entiry.residents;
import com.app.sac.visitors.entiry.visitors;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data

public class visitor_approvals {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "resident_id", nullable = false)
    private residents resident;

    @ManyToOne
    @JoinColumn(name = "visitor_id", nullable = false)
    private visitors visitor;

    private LocalDateTime validFrom;
    private LocalDateTime validTo;

    private String notes;
}
