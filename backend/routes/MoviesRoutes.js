import express from 'express';
import { createMovie ,getMovies ,getMoiveById} from '../controllers/MoviesController.js';

export const MoviesRoutes = express.Router();
MoviesRoutes.post('/',createMovie);
MoviesRoutes.get('/',getMovies);
MoviesRoutes.get('/movie/:id',getMoiveById);