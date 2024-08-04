import { UserEntity } from "@domain/entities/user.entity";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    controllers: [],
    providers: []
})
export class UsersModule{

}