import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() { name, email, password }: CreateUserDTO) {
    return this.userService.create({ name, email, password });
  }

  @Get()
  async list() {
    return { users: [] };
  }

  @Get(':id')
  async readOne(@Param('id', ParseIntPipe) id: number) {
    return { user: {}, id };
  }

  @Put(':id')
  async update(@Body() { name, email, password }: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'put',
      name, email, password,
      id
    }
  }

  @Patch(':id')
  async updateParcial(@Body() { name, email, password }: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'patch',
      name, email, password,
      id
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id
    }
  }
}