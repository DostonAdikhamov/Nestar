import { Module } from '@nestjs/common';
import { BoardArticleResolver } from './boardArticle.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardArticleService } from './boardArticle.service';
import BoardArticleSchema from '../../schemas/BoardArticle.model';
import { AuthModule } from '../auth/auth.module';
import { MemberModule } from '../member/member.module';
import { ViewModule } from '../view/view.module';
import { LikeModule } from '../like/like.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "BoardArticle", 
        schema: BoardArticleSchema,
      }
    ]), 
    AuthModule,
    MemberModule,
    ViewModule,
    LikeModule,
  ],
  providers: [BoardArticleResolver, BoardArticleService],
  exports: [BoardArticleService]
})
export class BoardArticleModule {
  
}
