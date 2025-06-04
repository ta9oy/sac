package com.app.sac.users;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<Users, UUID> {

    @Query(
            value = "SELECT u FROM Users u ORDER BY u.id",
            countQuery = "SELECT COUNT(u) FROM Users u"
    )
    Page<Users> findAllUsers(Pageable pageable);
}
