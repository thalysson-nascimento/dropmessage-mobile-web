import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ListPostMessageService } from 'src/app/shared/services/list-post-message/list-post-message.service';
import { ListPostMessageMock } from '../../shared/services/list-post-message/list-post-message.mock';
import { environment } from './../../../environments/environment';
import { ListPostMessageComponent } from './list-post-message.component';
import { ListPostMessageRoutingModule } from './list-post-message.routing.module';

@NgModule({
  imports: [CommonModule, ListPostMessageRoutingModule],
  exports: [ListPostMessageComponent],
  declarations: [ListPostMessageComponent],
  providers: [
    {
      provide: ListPostMessageService,
      useClass: environment.publicApi
        ? ListPostMessageService
        : ListPostMessageMock,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListPostMessageModule {}
