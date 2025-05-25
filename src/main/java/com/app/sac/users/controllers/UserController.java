package com.app.sac.users.controllers;
import com.app.sac.responses.EntityResponse;
import com.app.sac.responses.IResponse;
import com.app.sac.users.entiry.Users;
import com.app.sac.users.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/add")
    public ResponseEntity<IResponse> addUser(@RequestBody Users user) {

//        return new ResponseEntity<>(new EntityResponse<>(
//                HttpStatus.OK.value(),
//                userService.addUser(user)
//        ),HttpStatus.OK);

        return new ResponseEntity<>(new EntityResponse<>(
                HttpStatus.OK.value(),
                userService.addUser(user)
        ),HttpStatus.OK);

    }

}
