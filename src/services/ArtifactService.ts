import { ArtifactRepository } from '../repositories/ArtifactRepository';
import { IArtifact } from '../models/Artifact';
import { ApiError } from '../utils/ApiError';

export class ArtifactService {
    private repository: ArtifactRepository;
    private static instance: ArtifactService;

    private constructor() {
        this.repository = new ArtifactRepository();
    }

    public static getInstance(): ArtifactService {
        if (!ArtifactService.instance) {
            ArtifactService.instance = new ArtifactService();
        }
        return ArtifactService.instance;
    }

    async getAllArtifacts(): Promise<IArtifact[]> {
        return await this.repository.findAll();
    }

    async getArtifactById(id: string): Promise<IArtifact> {
        const artifact = await this.repository.findById(id);
        if (!artifact) {
            throw new ApiError(404, `Artefakt o id ${id} nie został znaleziony`);
        }
        return artifact;
    }

    async createArtifact(data: Partial<IArtifact>): Promise<IArtifact> {
        if (!data.name?.trim()) {
            throw new ApiError(400, 'Nazwa artefaktu jest wymagana');
        }
        return await this.repository.create(data);
    }

    async updateArtifact(id: string, data: Partial<IArtifact>): Promise<IArtifact> {
        const artifact = await this.getArtifactById(id);

        const updated = await this.repository.update(id, data);
        if (!updated) {
            throw new ApiError(500, 'Błąd podczas aktualizacji artefaktu');
        }
        return updated;
    }

    async deleteArtifact(id: string): Promise<void> {
        await this.getArtifactById(id);
        await this.repository.delete(id);
    }

    async removeOwnerFromArtifacts(ownerId: string): Promise<void> {
        await this.repository.removeOwnerFromArtifacts(ownerId);
    }
}