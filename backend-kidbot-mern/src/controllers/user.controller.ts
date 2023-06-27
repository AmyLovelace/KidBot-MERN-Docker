import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { User } from './types/user.type';

export default class UserController {
    constructor(private readonly userService: UserService) { }

async create(req: Request, res: Response): Promise<void> {
    const user: User = req.body;

    try {
      const createdUser = await this.userService.create(user);
      res.status(201).send(createdUser);
    } catch (err) {
      res.status(500).send({ error: 'Error al crear el usuario' });
    }
  }

  async findById(req: Request, res: Response): Promise<any> {
    const userId = req.params.id;

    try {
      const user = await this.userService.findById(userId);
      res.send(user);
    } catch (err) {
      res.status(500).send({ error: 'Error al obtener el usuario' });
    }
  }
  async find(req: Request, res: Response): Promise<any> {
    try {
      const users = await this.userService.find();
      res.send(users);
    } catch (err) {
      res.status(500).send({ error: 'Error al obtener los usuarios' });
    }
  }

   /*async update(req: Request, res: Response): Promise<any> {
    const userId = req.params.id;
    const { username, email, password } = req.body;

    try {
      const updatedUser = await UserService.updateUser(userId, username, email, password);
      res.send(updatedUser);
    } catch (err) {
      res.status(500).send({ error: 'Error al actualizar el usuario' });
    }
  }*/

   async delete(req: Request, res: Response): Promise<any> {
    const userId = req.params.id;

    try {
      await this.userService.delete(userId);
      res.send(204);
    } catch (err) {
      res.status(500).send({ error: 'Error al eliminar el usuario' });
    }
  }
}
