package com.app.sac.users;
import com.app.sac.responses.EntityResponse;
import com.app.sac.responses.IResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Optional;


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

    @GetMapping("")
    public ResponseEntity<IResponse> getAllUsers(@RequestParam Optional<Integer> page,
                                                 @RequestParam Optional<Integer> size) throws IOException  {


        System.out.println(page+" "+size);

        Integer SIZE = 10;
        Pageable pageable = PageRequest.of(page.orElse(0), size.orElse(SIZE));

        return new ResponseEntity<>(new EntityResponse<>(
                HttpStatus.OK.value(),
                userService.getAllUsers(pageable)
        ),HttpStatus.OK);
    }

}
