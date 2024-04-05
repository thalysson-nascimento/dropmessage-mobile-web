/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { ListPostMessageService } from './list-post-message.service';

describe('Service: ListPostMessage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListPostMessageService],
    });
  });

  it('should ...', inject(
    [ListPostMessageService],
    (service: ListPostMessageService) => {
      expect(service).toBeTruthy();
    }
  ));
});
