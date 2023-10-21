import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostMessageComponent } from './list-post-message.component';

const routes: Routes = [
  {
    path: '',
    component: ListPostMessageComponent,
    children: [
      {
        path: '',
        component: ListPostMessageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class ListPostMessageRoutingModule {}
