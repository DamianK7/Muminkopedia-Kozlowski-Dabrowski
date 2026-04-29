import { Request, Response, NextFunction } from 'express';
import { ArtifactService } from '../services/ArtifactService';

const artifactService = ArtifactService.getInstance();

type ParamsWithId = {
    id: string;
};

export const getAllArtifacts = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const artifacts = await artifactService.getAllArtifacts();
        res.json(artifacts);
    } catch (error) {
        next(error);
    }
};

export const getArtifactById = async (
    req: Request<ParamsWithId>,
    res: Response,
    next: NextFunction
) => {
    try {
        const artifact = await artifactService.getArtifactById(req.params.id);
        res.json(artifact);
    } catch (error) {
        next(error);
    }
};

export const createArtifact = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const artifact = await artifactService.createArtifact(req.body);
        res.status(201).json(artifact);
    } catch (error) {
        next(error);
    }
};

export const updateArtifact = async (
    req: Request<ParamsWithId>,
    res: Response,
    next: NextFunction
) => {
    try {
        const artifact = await artifactService.updateArtifact(req.params.id, req.body);
        res.json(artifact);
    } catch (error) {
        next(error);
    }
};

export const deleteArtifact = async (
    req: Request<ParamsWithId>,
    res: Response,
    next: NextFunction
) => {
    try {
        await artifactService.deleteArtifact(req.params.id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};