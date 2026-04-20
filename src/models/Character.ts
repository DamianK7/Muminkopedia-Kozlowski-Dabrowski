import mongoose, { Schema, Document, Types } from 'mongoose';

export interface ICharacter extends Document {
    name: string;
    description?: string;
    species: string;
    isHibernating: boolean;
    bestFriend?: Types.ObjectId;
}

const CharacterSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    species: { type: String, required: true },
    isHibernating: { type: Boolean, default: false },
    bestFriend: { type: Schema.Types.ObjectId, ref: 'Character' }
}, { timestamps: true });

export const CharacterModel = mongoose.model<ICharacter>('Character', CharacterSchema);