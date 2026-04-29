import { Router } from 'express';
import * as artifactController from '../controllers/ArtifactController';

const router = Router();

router.get('/', artifactController.getAllArtifacts);
router.get('/:id', artifactController.getArtifactById);
router.post('/', artifactController.createArtifact);
router.put('/:id', artifactController.updateArtifact);
router.delete('/:id', artifactController.deleteArtifact);

export default router;