import UserService from "../../../src/services/user.service";
import { User } from "../../../src/controllers/types/user.type";
import UserRepository from "../../../src/repositories/user.repository";

let userService: UserService;

beforeAll(() => {
  jest.clearAllMocks();
});

beforeEach(() => {
  userService = new UserService(new UserRepository());
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("User service", () => {
  test("Should create User", async () => {
    const newUser: User = {
      username: "lorem",
      email: "ipsum",
      password: "123456",
    };

    const createdUser: any = {
      username: "lorem",
      email: "ipsum",
    };

    const userRepositoryMock = jest
      .spyOn(UserRepository.prototype, "create")
      .mockReturnValue(Promise.resolve(createdUser));

    const result = await userService.create(newUser);

    expect(userRepositoryMock).toHaveBeenCalledTimes(1);
    expect(result).toBe(createdUser);
  });

  test("Should find User by id", async () => {

    const userId: string = '1';

    const foundUser: any = {
      username: "lorem",
      email: "ipsum",
    };

    const userRepositoryMock = jest
      .spyOn(UserRepository.prototype, "findById")
      .mockReturnValue(Promise.resolve(foundUser));

    const result = await userService.findById(userId);

    expect(userRepositoryMock).toHaveBeenCalledTimes(1);
    expect(result).toBe(foundUser);
  });

  test("Should find all users", async () => {

    const foundedUsers: any = [{
      username: "lorem",
      email: "ipsum",
    }];

    const userRepositoryMock = jest
      .spyOn(UserRepository.prototype, "find")
      .mockReturnValue(Promise.resolve(foundedUsers));

    const result = await userService.find();

    expect(userRepositoryMock).toHaveBeenCalledTimes(1);
    expect(result).toBe(foundedUsers);
  });

  test("Should update user", async () => {

    const userId = '1';

    const updatedUser: any = [{
      username: "ipsum",
      email: "lorem",
    }];

    const userRepositoryMock = jest
      .spyOn(UserRepository.prototype, "update")
      .mockReturnValue(Promise.resolve(updatedUser));

    const result = await userService.update(userId, updatedUser);

    expect(userRepositoryMock).toHaveBeenCalledTimes(1);
    expect(result).toBe(updatedUser);
  });

  test("Should delete user by id", async () => {

    const userId = '1';

    const userRepositoryMock = jest
      .spyOn(UserRepository.prototype, "delete")
      .mockReturnValue(Promise.resolve(null));

    const result = await userService.delete(userId);

    expect(userRepositoryMock).toHaveBeenCalledTimes(1);
    expect(result).toBe(null);
  });


});
