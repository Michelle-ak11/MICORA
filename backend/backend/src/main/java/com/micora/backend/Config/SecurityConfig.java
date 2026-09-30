package com.micora.backend.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration 
public class SecurityConfig {
    @Bean 
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean 
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
            http
                .csrf(crsf -> crsf.disable()) //Cross-Site Request Forgery protection is disabled for simplicity
                .authorizeHttpRequests(auth -> auth
                    .requestMatchers("/api/services/**", "/api/auth/**").permitAll() //makes any url starting w api/service publicly accessible
                    .anyRequest().authenticated() //all other requests require authentication
                );

            return http.build();
        }
}
