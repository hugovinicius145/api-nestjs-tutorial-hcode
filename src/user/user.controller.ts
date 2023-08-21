import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

@Controller('users')
export class UserController {

  @Post()
  async create(@Body() { name, email, password }: CreateUserDTO) {
    return { name, email, password };
  }

  @Get()
  async list() {
    return { users: [] };
  }

  @Get(':id')
  async readOne(@Param() params) {
    return { user: {}, params };
  }

  @Put(':id')
  async update(@Body() { name, email, password }: UpdatePutUserDTO, @Param() params) {
    return {
      method: 'put',
      name, email, password,
      params
    }
  }

  @Patch(':id')
  async updateParcial(@Body() { name, email, password }: UpdatePatchUserDTO, @Param() params) {
    return {
      method: 'patch',
      name, email, password,
      params
    }
  }

  @Delete(':id')
  async delete(@Param() params) {
    return {
      params
    }
  }
}