import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";

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
  async update(@Body() body, @Param() params) {
    return {
      method: 'put',
      body,
      params
    }
  }

  @Patch(':id')
  async updateParcial(@Body() body, @Param() params) {
    return {
      method: 'patch',
      body,
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