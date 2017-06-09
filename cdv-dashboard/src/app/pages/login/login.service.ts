import {Injectable} from '@angular/core';
import { Http ,Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class UserInfoService {
  
 
constructor(private http: Http){}
   
    
 getProfileData(token:string) : Observable<any[]> {
        var headers = new Headers();
        headers.append('Authorization', "Bearer "+token);
       
        return this.http
            .get("http://localhost:8080/aac/basicprofile/me",{
                headers : headers
            }).map((res:Response) => res.json()); 
        }
             
 getPDataFields(): Observable<any[]> {
        
    return this.http
        .get("https://simpatico.eng.it/CDV/service-manager/api/v1/pdatafields").map((responseData) => responseData.json()); 
    } 

   
}
