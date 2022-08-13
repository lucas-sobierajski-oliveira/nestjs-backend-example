import { Module } from '@nestjs/common';
import { HttpModule } from './interface/http/http.module'

@Module({
  imports: [HttpModule]
})
export class MainModule { }
