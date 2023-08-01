import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PartModule } from './part/part.module';
import cors from 'cors'
@Module({
  
  imports: [PartModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors())
  }
}
