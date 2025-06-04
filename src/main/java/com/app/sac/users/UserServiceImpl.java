package com.app.sac.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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


    @Override
    public Page<Users> getAllUsers(Pageable pageable) {
        return userRepository.findAllUsers(pageable);
    }

}
