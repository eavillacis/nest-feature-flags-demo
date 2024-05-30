import { Module } from '@nestjs/common';
import { FeatureController } from './feature/feature.controller';
import { FeatureService } from './feature/feature.service';

@Module({
  controllers: [FeatureController],
  providers: [FeatureService]
})
export class FeatureModule {}
