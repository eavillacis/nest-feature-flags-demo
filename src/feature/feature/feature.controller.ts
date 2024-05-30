import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeatureDto } from '../dto/feature.dto/feature.dto';
import { FeatureService } from './feature.service';

@Controller('feature')
export class FeatureController {
    
    constructor(private featureService: FeatureService) {}

    @Post()
    create(@Body() feature:FeatureDto): FeatureDto {
        return this.featureService.create(feature);
    }

    @Get()
    getAll(): FeatureDto[] {
        return this.featureService.findAll();
    }

}
