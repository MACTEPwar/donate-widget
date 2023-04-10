import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RequestsService } from './Requests/requests.service';
@NgModule({
  imports: [CommonModule],
  providers: [RequestsService],
})
export class CoreModule {}
