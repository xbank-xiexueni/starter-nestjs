import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    //  curl -d name=mary localhost:3000/user
    return `This action adds a new user, welcome ${createUserDto.name}`;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    // curl localhost:3000/user/1
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    // curl -X PATCH localhost:3000/user/1 -d name=hahaha
    return `This action updates a #${id} user, ${updateUserDto.name} updated`;
  }

  remove(id: number) {
    // curl -X DELETE localhost:3000/user/1
    return `This action removes a #${id} user`;
  }
}
