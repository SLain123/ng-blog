import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { IRegisterRequest } from './../types/register_request.interface';
import { IUser } from 'src/app/shared/types/user.interface';
import { environment } from 'src/environments/environment';
import { IAuthResponse } from './../types/authResponse.interface';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    register(data: IRegisterRequest): Observable<IUser> {
        const url = `${environment.baseURL}/users`;

        return this.http
            .post<IAuthResponse>(url, { user: data })
            .pipe(map((response: IAuthResponse) => response.user));
    }
}
