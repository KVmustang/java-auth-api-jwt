package com.seunome.authapi.service;

import com.seunome.authapi.model.User;
import com.seunome.authapi.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository repository;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User register(String username, String password) {
        String encoded = encoder.encode(password);
        return repository.save(new User(username, encoded));
    }

    public Optional<User> authenticate(String username, String password) {
        Optional<User> user = repository.findByUsername(username);
        if (user.isPresent() && encoder.matches(password, user.get().getPassword())) {
            return user;
        }
        return Optional.empty();
    }
}
