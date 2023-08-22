import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [JwtModule.register({
    secret: `n7di!@04XNJ5HKQeG&uM0SO0tSp!Ej5#`
  })],
})
export class AuthModule { }