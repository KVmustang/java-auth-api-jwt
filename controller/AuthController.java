package com.seunome.authapi.controller;

import com.seunome.authapi.dto.AuthResponse;
import com.seunome.authapi.dto.LoginRequest;
import com.seunome.authapi.model.User;
import com.seunome.authapi.security.JwtService;
import com.seunome.authapi.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;
    private final JwtService jwtService;

    public AuthController(UserService userService, JwtService jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    public User register(@RequestBody LoginRequest request) {
        return userService.register(request.getUsername(), request.getPassword());
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        Optional<User> user = userService.authenticate(
                request.getUsername(),
                request.getPassword()
        );

        if (user.isEmpty()) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtService.generateToken(user.get().getUsername());
        return new AuthResponse(token);
    }
}
