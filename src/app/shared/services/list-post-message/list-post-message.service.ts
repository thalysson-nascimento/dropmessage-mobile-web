import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostMessage } from '../../interfaces/list-post-message.interface';
import { ListPostMessageBase } from './list-post-message.base';

@Injectable({
  providedIn: 'root',
})
export class ListPostMessageService extends ListPostMessageBase {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  listPostMessages(id: string): Observable<PostMessage[]> {
    return this.httpClient.get<PostMessage[]>(
      `${environment.pathUri}/list-product`
    );
  }
}
