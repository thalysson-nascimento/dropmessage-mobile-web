import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostMessage } from '../../interfaces/list-post-message.interface';
import { ListPostMessageBase } from './list-post-message.base';

@Injectable({
  providedIn: 'root',
})
export class ListPostMessageMock extends ListPostMessageBase {
  listPostMessages(): Observable<PostMessage[]> {
    return of<PostMessage[]>([
      {
        image: 'jpeg',
        path: 'https://img.freepik.com/fotos-gratis/mulher-sorridente-interessada-com-penteado-comprido-olhando-por-cima-do-ombro_197531-7398.jpg?size=626&ext=jpg&ga=GA1.1.1269040533.1708732800&semt=ais',
        title: 'Luma',
      },
      {
        image: 'jpeg',
        path: 'https://media.istockphoto.com/id/1329622588/pt/foto/portrait-beautiful-young-woman-with-clean-fresh-skin.jpg?s=612x612&w=0&k=20&c=nrhWjx6500d2hu3A0xOUne-beSHfNroYzo5AkElE-e4=',
        title: 'Model',
      },
    ]);
  }
}
