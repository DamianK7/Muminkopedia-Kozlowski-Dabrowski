import { ArtifactModel, IArtifact } from '../models/Artifact';

export class ArtifactRepository {
    async findAll(): Promise<IArtifact[]> {
        return await ArtifactModel.find().populate('owner');
    }

    async create(data: Partial<IArtifact>): Promise<IArtifact> {
        const artifact = new ArtifactModel(data);
        return await artifact.save();
    }

    async deleteByOwnerId(ownerId: string): Promise<void> {
        await ArtifactModel.deleteMany({ owner: ownerId });
    }
}