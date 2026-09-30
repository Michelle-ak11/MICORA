package com.micora.backend.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.micora.backend.model.Service;

public interface ServiceRepo extends JpaRepository<Service, Long> {
    
}
