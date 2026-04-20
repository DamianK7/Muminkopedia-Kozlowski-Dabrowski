import { CharacterModel, ICharacter } from '../models/Character';

export class CharacterRepository {
    async findAll(): Promise<ICharacter[]> {
        return await CharacterModel.find().populate('bestFriend');
    }

    async findById(id: string): Promise<ICharacter | null> {
        return await CharacterModel.findById(id).populate('bestFriend');
    }

    async create(data: Partial<ICharacter>): Promise<ICharacter> {
        const character = new CharacterModel(data);
        return await character.save();
    }

    async delete(id: string): Promise<ICharacter | null> {
        return await CharacterModel.findByIdAndDelete(id);
    }
}