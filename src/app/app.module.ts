import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";


Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'explorecity',
          entities: [
            "dist/**/*.entity{.ts,.js}"
          ],
          synchronize: true,
      }),
      TypeOrmModule.forFeature([
          
      ]),

    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}

