import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";

@Module({
  imports: [JwtModule.register({
    secret: `n7di!@04XNJ5HKQeG&uM0SO0tSp!Ej5#`
  }), UserModule],
  controllers: [AuthController]
})
export class AuthModule { }