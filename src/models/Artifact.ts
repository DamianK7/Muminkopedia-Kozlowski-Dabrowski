import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IArtifact extends Document {
    name: string;
    propertiesDescription?: string;
    owner?: Types.ObjectId | null;
}

const ArtifactSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    propertiesDescription: {
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Character',
        required: false,
        default: null
    }
}, {
    timestamps: true
});

export const ArtifactModel = mongoose.model<IArtifact>('Artifact', ArtifactSchema);