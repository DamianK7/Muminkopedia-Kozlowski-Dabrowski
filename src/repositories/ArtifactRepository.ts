import { ArtifactModel, IArtifact } from '../models/Artifact';

export class ArtifactRepository {

    async findAll(): Promise<IArtifact[]> {
        return await ArtifactModel.find().populate('owner');
    }

    async findById(id: string): Promise<IArtifact | null> {
        return await ArtifactModel.findById(id).populate('owner');
    }

    async create(data: Partial<IArtifact>): Promise<IArtifact> {
        const artifact = new ArtifactModel(data);
        return await artifact.save();
    }

    async update(id: string, data: Partial<IArtifact>): Promise<IArtifact | null> {
        return await ArtifactModel.findByIdAndUpdate(
            id,
            data,
            { new: true, runValidators: true }
        ).populate('owner');
    }

    async delete(id: string): Promise<IArtifact | null> {
        return await ArtifactModel.findByIdAndDelete(id);
    }

    async removeOwnerFromArtifacts(ownerId: string): Promise<void> {
        await ArtifactModel.updateMany(
            { owner: ownerId },
            { $set: { owner: null } }
        );
    }
}