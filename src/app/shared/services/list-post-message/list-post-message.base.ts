import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostMessage } from '../../interfaces/list-post-message.interface';

@Injectable()
export abstract class ListPostMessageBase {
  constructor(protected httpClient: HttpClient) {}

  abstract listPostMessages(idQRCode: string): Observable<PostMessage[]>;
}
