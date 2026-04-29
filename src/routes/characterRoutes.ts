import { Router } from 'express';
import * as characterController from '../controllers/CharacterController';

const router = Router();

router.get('/', characterController.getAllCharacters);
router.get('/:id', characterController.getCharacterById);
router.post('/', characterController.createCharacter);
router.put('/:id', characterController.updateCharacter);
router.delete('/:id', characterController.deleteCharacter);

export default router;