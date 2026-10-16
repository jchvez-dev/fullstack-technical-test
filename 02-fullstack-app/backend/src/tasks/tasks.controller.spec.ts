import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  const mockTasksService = {
    findAll: jest.fn().mockResolvedValue([
      { id: '1', title: 'Task 1', completed: false },
    ]),
    findOne: jest.fn().mockResolvedValue({ id: '1', title: 'Task 1', completed: false }),
    create: jest.fn().mockImplementation((dto) =>
      Promise.resolve({ id: '1', ...dto }),
    ),
    update: jest.fn().mockImplementation((id, dto) =>
      Promise.resolve({ id, ...dto }),
    ),
    remove: jest.fn().mockResolvedValue({ deleted: true }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: mockTasksService,
        },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const result = await controller.findAll();
      expect(result).toEqual([{ id: '1', title: 'Task 1', completed: false }]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a task by id', async () => {
      const result = await controller.findOne('1');
      expect(result).toEqual({ id: '1', title: 'Task 1', completed: false });
      expect(service.findOne).toHaveBeenCalledWith('1');
    });
  });
});
