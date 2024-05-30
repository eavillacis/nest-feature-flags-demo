import { Injectable } from '@nestjs/common';
import { FeatureDto } from '../dto/feature.dto/feature.dto';

@Injectable()
export class FeatureService {
    features: FeatureDto[] = [];

    create(feature: FeatureDto): FeatureDto {
        this.features.push(feature);
        return feature;
    }

    findAll(): FeatureDto[] {
        return this.features;
    }
}
