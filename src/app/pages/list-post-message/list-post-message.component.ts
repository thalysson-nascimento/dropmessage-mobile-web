import { Component, OnInit } from '@angular/core';
import { PostMessage } from 'src/app/shared/interfaces/list-post-message.interface';
import { ListPostMessageService } from 'src/app/shared/services/list-post-message/list-post-message.service';

@Component({
  selector: 'app-list-post-message',
  templateUrl: './list-post-message.component.html',
  styleUrls: ['./list-post-message.component.scss'],
})
export class ListPostMessageComponent implements OnInit {
  listPostMessages!: PostMessage[];

  slides = [
    {
      img: 'https://static.vecteezy.com/ti/fotos-gratis/p2/9349486-silhueta-de-jovem-mulher-na-praia-mulher-latino-americana-sentada-na-praia-areia-olhando-para-camera-em-um-lindo-dia-de-verao-foto.jpg',
    },
    {
      img: 'https://conteudo.imguol.com.br/c/entretenimento/1e/2022/01/14/mulher-lendo-livro-na-praia-1642177146312_v2_4x3.jpg',
    },
    {
      img: 'https://static.vecteezy.com/ti/fotos-gratis/p2/9349486-silhueta-de-jovem-mulher-na-praia-mulher-latino-americana-sentada-na-praia-areia-olhando-para-camera-em-um-lindo-dia-de-verao-foto.jpg',
    },
    {
      img: 'https://conteudo.imguol.com.br/c/entretenimento/1e/2022/01/14/mulher-lendo-livro-na-praia-1642177146312_v2_4x3.jpg',
    },
    {
      img: 'https://static.vecteezy.com/ti/fotos-gratis/p2/9349486-silhueta-de-jovem-mulher-na-praia-mulher-latino-americana-sentada-na-praia-areia-olhando-para-camera-em-um-lindo-dia-de-verao-foto.jpg',
    },
    {
      img: 'https://conteudo.imguol.com.br/c/entretenimento/1e/2022/01/14/mulher-lendo-livro-na-praia-1642177146312_v2_4x3.jpg',
    },
  ];
  translateY: number = 0;

  scrollPosition = 0;

  constructor(private listPostMessageService: ListPostMessageService) {}

  ngOnInit() {
    this.lodaData();
  }

  lodaData() {
    this.listPostMessageService.listPostMessages('').subscribe({
      next: (listPost: PostMessage[]) => {
        this.listPostMessages = listPost;
      },
      error: () => {
        throw Error(
          'Ops, ocorreu um erro enesperado, por favor, tente mais tarde.'
        );
      },
    });
  }

  // addSlide() {
  //   this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  // slickInit(e: any) {
  //   console.log('slick initialized');
  // }

  // breakpoint(e: any) {
  //   console.log('breakpoint');
  // }

  // afterChange(e: any) {
  //   console.log('afterChange');
  // }

  // beforeChange(e: any) {
  //   console.log('beforeChange');
  // }
}
