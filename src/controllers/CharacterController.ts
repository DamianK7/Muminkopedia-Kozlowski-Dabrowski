import { Request, Response, NextFunction } from 'express';
import { CharacterService } from '../services/CharacterService';

const characterService = new CharacterService();

// Typy parametrów
type ParamsWithId = {
    id: string;
};

export const getAllCharacters = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const characters = await characterService.getAllCharacters();
        res.json(characters);
    } catch (error) {
        next(error);
    }
};

export const getCharacterById = async (
    req: Request<ParamsWithId>,
    res: Response,
    next: NextFunction
) => {
    try {
        const character = await characterService.getCharacterById(req.params.id);
        res.json(character);
    } catch (error) {
        next(error);
    }
};

export const createCharacter = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const character = await characterService.createCharacter(req.body);
        res.status(201).json(character);
    } catch (error) {
        next(error);
    }
};

export const updateCharacter = async (
    req: Request<ParamsWithId>,
    res: Response,
    next: NextFunction
) => {
    try {
        const character = await characterService.updateCharacter(req.params.id, req.body);
        res.json(character);
    } catch (error) {
        next(error);
    }
};

export const deleteCharacter = async (
    req: Request<ParamsWithId>,
    res: Response,
    next: NextFunction
) => {
    try {
        await characterService.deleteCharacter(req.params.id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};