import { Request, Response, Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import Validate from '../middlewares/Validate';

const matchesController = new MatchesController();

const matchesRouter = Router();

matchesRouter.get(
  '/matches',
  // Validate.validateToken,
  (req: Request, res: Response) => matchesController.getAll(req, res),
);

matchesRouter.patch(
  '/matches/:id/finish',
  Validate.validateToken,
  (req: Request, res: Response) => matchesController.update(req, res),
);

matchesRouter.patch(
  '/matches/:id',
  Validate.validateToken,
  (req: Request, res: Response) => matchesController.updateGoals(req, res),
);

export default matchesRouter;
