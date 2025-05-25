package com.app.sac.users.services;

import com.app.sac.users.entiry.Users;
import com.app.sac.users.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public Users addUser(Users user) {
        return userRepository.save(user);
    }

}
