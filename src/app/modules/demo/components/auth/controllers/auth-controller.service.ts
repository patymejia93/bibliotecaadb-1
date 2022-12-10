import { Injectable } from '@angular/core';
import { Token } from '../interfaces/token';
import { TokenParams } from '../interfaces/token-params';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthControllerService {

    constructor(
        private _authService: AuthService
    ) { }

    getToken(params: TokenParams): Promise<boolean> {
        console.log(`params`, params)
        sessionStorage.setItem('token', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE2NzA2NTE3MTIsInVzZXIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbIkFkbWluIl0sImp0aSI6ImIyODc1ZGQxLTFmNmQtNDEwZS05N2I5LTA3NzIyYjJiNzNlOSIsImVtYWlsIjoidG9ueWF5YWxhQGdtYWlsLmNvbSIsImNsaWVudF9pZCI6InZpZXctY2hlcXVlcyJ9.fvnRw9-pl05GBlwPFRZdxkuGFP-NSmssYBsY2yy1mWoZigiNSSmZtV7FdpwLn2NBra8dMH17mA_nvSyH04DIdgnd8n9wVgKVTnV4ufx-nkQvEL9eTCwvLk8uft_G_fVOQkRKiXpWbBEYqWVN86U21xP1fqoBkgwrU2JTIhcmo02Z11W1ZERady09-y458RXQ_WwZ20s5yxrX6MNNAPQCyeKshqRUxSsehIzzTux68D0e-taVNuG1aT4piCNvEdB-lW4Y8T9RcdveLmoHtlAcbzQ0Frgw28NJ7cgbYwyjoGoK54BGJyHIAF84Xg32cjewX3t0S-6PYCoa3kAK7DmJTw');
        return new Promise<boolean>((resolve, reject) => {
            this._authService.token(params).subscribe({
                next: (response: Token) => {
                    // console.log(`response`, response)
                    if (response.access_token !== undefined && response.access_token !== null) {
                        resolve(true)
                        // sessionStorage.setItem('token', response.access_token);
                    } else {
                        resolve(false)
                    }
                },
                error: () => resolve(false)
            });
        });
    }
}
