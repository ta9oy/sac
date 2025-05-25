package com.app.sac.responses;

import lombok.Getter;
import lombok.Setter;

@Setter
public class EntityResponse<T> implements IResponse {
    @Getter
    private int status;
    private T object;

    public EntityResponse(int status, T object) {
        this.status = status;
        this.object = object;
    }

    public Object getObject() {
        return object;
    }

}
