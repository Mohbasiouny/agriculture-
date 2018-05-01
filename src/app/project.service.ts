import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProjectService {

  constructor(public _http: HttpClient) {
  }
// getallproject(){
//     this._http.get('http://127.0.0.1:8000/api/project')
// }
}
