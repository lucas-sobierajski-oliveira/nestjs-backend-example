import { Module } from '@nestjs/common';
import { HttpModule } from '@/presentation/http/http.module'

@Module({
  imports: [HttpModule]
})
export class MainModule { }
