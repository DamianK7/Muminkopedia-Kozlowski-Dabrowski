import { CharacterRepository } from '../repositories/CharacterRepository';
import { ICharacter } from '../models/Character';
import { ApiError } from '../utils/ApiError';
import { ArtifactService } from './ArtifactService';

export class CharacterService {
    private repository: CharacterRepository;

    constructor() {
        this.repository = new CharacterRepository();
    }

    async getAllCharacters(): Promise<ICharacter[]> {
        return await this.repository.findAll();
    }

    async getCharacterById(id: string): Promise<ICharacter> {
        const character = await this.repository.findById(id);
        if (!character) {
            throw new ApiError(404, `Postać o id ${id} nie została znaleziona`);
        }
        return character;
    }

    async createCharacter(data: Partial<ICharacter>): Promise<ICharacter> {
        if (!data.name?.trim() || !data.species?.trim()) {
            throw new ApiError(400, 'Imię i gatunek są wymagane');
        }

        const existing = await CharacterModel.findOne({ name: data.name.trim() });
        if (existing) {
            throw new ApiError(409, `Postać o imieniu "${data.name}" już istnieje`);
        }

        return await this.repository.create(data);
    }

    async updateCharacter(id: string, data: Partial<ICharacter>): Promise<ICharacter> {
        const character = await this.getCharacterById(id);

        if (data.name && data.name.trim() !== character.name) {
            const existing = await CharacterModel.findOne({ name: data.name.trim() });
            if (existing) {
                throw new ApiError(409, `Postać o imieniu "${data.name}" już istnieje`);
            }
        }

        const updated = await this.repository.update(id, data);
        if (!updated) {
            throw new ApiError(500, 'Błąd podczas aktualizacji postaci');
        }

        return updated;
    }

    async deleteCharacter(id: string): Promise<void> {
        await this.getCharacterById(id);
        await this.repository.delete(id);
        await ArtifactService.getInstance().removeOwnerFromArtifacts(id);
    }
}


import { CharacterModel } from '../models/Character';