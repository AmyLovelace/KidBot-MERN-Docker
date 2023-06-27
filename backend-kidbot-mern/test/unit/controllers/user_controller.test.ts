import UserController from '../../../src/controllers/user.controller';
import UserService from '../../../src/services/user.service';
import UserRepository from '../../../src/repositories/user.repository';

let userController: UserController;

beforeAll(() => {
	jest.clearAllMocks();
});

beforeEach(() => {
	userController = new UserController(new UserService(new UserRepository()));
});

afterEach(() => {
	jest.clearAllMocks();
});

describe('User controller', () => {
  test("Should create User", async () => {

    const createdUser: any = {
      username: 'lorem',
      email: 'ipsum',
    }

    const req: any = {
			body: {
        username: 'lorem',
        email: 'ipsum',
        password: '123456'   
      },
		};

		const mockedRes: any = {
			status: jest.fn().mockReturnThis(),
			send: jest.fn(),
		};

    const userServiceMock = jest
		.spyOn(UserService.prototype, 'create')
		.mockReturnValue(Promise.resolve(createdUser));

    await userController.create(req, mockedRes);

		expect(userServiceMock).toHaveBeenCalledTimes(1);

  });

  test("Should find User by id", async () => {

    const req: any = {
			params: {
        id: '1'
      }
		};

    const foundUser: any = {
      username: 'lorem',
      email: 'ipsum',
    }

		const mockedRes: any = {
			status: jest.fn().mockReturnThis(),
			send: jest.fn(),
		};

    const userServiceMock = jest
		.spyOn(UserService.prototype, 'findById')
		.mockReturnValue(Promise.resolve(foundUser));

    await userController.findById(req, mockedRes);

		expect(userServiceMock).toHaveBeenCalledTimes(1);
  });

  test("Should find all users", async () => {

    const req: any = {};

    const foundedUsers: any = [{
      username: 'lorem',
      email: 'ipsum',
    }]

		const mockedRes: any = {
			status: jest.fn().mockReturnThis(),
			send: jest.fn(),
		};

    const userServiceMock = jest
		.spyOn(UserService.prototype, 'find')
		.mockReturnValue(Promise.resolve(foundedUsers));

    await userController.find(req, mockedRes);

		expect(userServiceMock).toHaveBeenCalledTimes(1);

  });

  test("Should delete User by id", async () => {

    const req: any = {
			params: {
        id: '1'
      }
		};

		const mockedRes: any = {
			status: jest.fn().mockReturnThis(),
			send: jest.fn(),
		};

    const userServiceMock = jest
		.spyOn(UserService.prototype, 'delete')
		.mockReturnValue(Promise.resolve({}));

    await userController.delete(req, mockedRes);

		expect(userServiceMock).toHaveBeenCalledTimes(1);

  });

  test("Should not create User", async () => {

    const req: any = {
      body: {
        username: 'lorem',
        email: 'ipsum',
        password: '123456'   
      },
    };

    const mockedRes: any = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    const userServiceMock = jest
      .spyOn(UserService.prototype, 'create')
      .mockRejectedValue(new Error('Failed to create user'));

    await userController.create(req, mockedRes);

    expect(userServiceMock).toHaveBeenCalledTimes(1);
  });

  test("Should not find User by id", async () => {

    const req: any = {
			params: {
        id: '1'
      }
		};


		const mockedRes: any = {
			status: jest.fn().mockReturnThis(),
			send: jest.fn(),
		};

    const userServiceMock = jest
		.spyOn(UserService.prototype, 'findById')
		.mockRejectedValue(Promise.resolve(null));

    await userController.findById(req, mockedRes);

		expect(userServiceMock).toHaveBeenCalledTimes(1);

  });

  test("Should not find all users", async () => {

    const req: any = {};


		const mockedRes: any = {
			status: jest.fn().mockReturnThis(),
			send: jest.fn(),
		};

    const userServiceMock = jest
		.spyOn(UserService.prototype, 'find')
		.mockRejectedValue(Promise.resolve(null));

    await userController.find(req, mockedRes);

		expect(userServiceMock).toHaveBeenCalledTimes(1);

  });

  test("Should not delete User by id", async () => {

    const req: any = {
			params: {
        id: '1'
      }
		};

		const mockedRes: any = {
			status: jest.fn().mockReturnThis(),
			send: jest.fn(),
		};

    const userServiceMock = jest
		.spyOn(UserService.prototype, 'delete')
		.mockRejectedValue(Promise.resolve(null));

    await userController.delete(req, mockedRes);

		expect(userServiceMock).toHaveBeenCalledTimes(1);

  });

});