import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { TasksService } from './tasks.service';
import { NotFoundException } from '@nestjs/common';

// Mock del modelo de Mongoose
const mockTaskModel = {
  find: jest.fn().mockReturnThis(),
  exec: jest.fn(),
  findById: jest.fn(),
  create: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findByIdAndDelete: jest.fn(),
};

describe('TasksService', () => {
  let service: TasksService;
  let model: typeof mockTaskModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getModelToken('Task'),
          useValue: mockTaskModel,
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
    model = module.get(getModelToken('Task'));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const result = [{ title: 'Test Task', completed: false }];
      mockTaskModel.exec.mockResolvedValueOnce(result);

      const tasks = await service.findAll();
      expect(tasks).toEqual(result);
      expect(model.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single task by id', async () => {
      const result = { _id: 'someId', title: 'Test Task' };
      mockTaskModel.findById.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(result),
      });

      const task = await service.findOne('someId');
      expect(task).toEqual(result);
      expect(model.findById).toHaveBeenCalledWith('someId');
    });

    it('should throw NotFoundException if task is not found', async () => {
      mockTaskModel.findById.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(null),
      });

      await expect(service.findOne('invalidId')).rejects.toThrow(NotFoundException);
    });
  });
});
