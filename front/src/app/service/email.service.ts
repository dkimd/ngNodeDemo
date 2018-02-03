import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import { Email } from './email';

@Injectable()
export class EmailService {
  private apiUrl = environment.host + '/api/v1/';

  constructor(
    private http: Http
  ) { }

  save(email: Email): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(this.apiUrl + 'email', JSON.stringify(email), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.log(error);
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    console.log('here01');
    const body = res.json();
    return body || [];
  }

}
