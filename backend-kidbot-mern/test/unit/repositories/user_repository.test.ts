import UserRepository from '../../../src/repositories/user.repository';
import { userModel } from '../../../src/entities/user.entity';

describe('UserRepository', () => {
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = new UserRepository();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });


  test('should create a new user', async () => {
    const createUserMock = jest.fn().mockResolvedValue({ username: 'john', email: 'john@example.com' });
    jest.spyOn(userRepository, 'create').mockImplementation(createUserMock);

    const newUser = {
      username: 'john',
      email: 'john@example.com',
      password: 'password',
    };

    const createdUser = await userRepository.create(newUser);

    expect(createUserMock).toHaveBeenCalledTimes(1);
    expect(createdUser).toEqual({ username: 'john', email: 'john@example.com' });
  });


  

});
