import express, { Request, Response } from 'express';
import StoryController from '../../controllers/story.controller';
import StoryRepository from '../../repositories/story.repository';
import StoryService from '../../services/story.service';
import OpenAIApiClient from '../../clients/openapi.client';

const router = express.Router();

const storyRepository = new StoryRepository();

const apiClient: OpenAIApiClient = new OpenAIApiClient();

const storyService = new StoryService(storyRepository, apiClient);


const storyController = new StoryController(storyService);
router.get('/search', storyController.findBy.bind(storyController));
router.post('/', storyController.create.bind(storyController));
router.get('/:id', storyController.findById.bind(storyController));
router.get('/', storyController.find.bind(storyController));

// router.put('/stories/:id', storyController.update.bind(storyController));
router.delete('/:id', storyController.delete.bind(storyController));


export default router;
