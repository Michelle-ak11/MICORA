
package com.micora.backend.controller;

import com.micora.backend.Repository.ServiceRepo;
import com.micora.backend.model.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
public class ServiceController {

    private final ServiceRepo serviceRepository;

    public ServiceController(ServiceRepo serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    @GetMapping
    public List<Service> getAllServices() {
        return serviceRepository.findAll();
    }
}