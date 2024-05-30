import { IsArray, IsBoolean, IsNumber, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class ParametersDto {
    @IsString()
    @IsBoolean()
    value: string | boolean;
}

export class EnabledForDto {
    @IsString()
    name: string;

    @ValidateNested()
    @Type(() => ParametersDto)
    parameters: ParametersDto;
}

export class FeatureDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EnabledForDto)
    enabledFor: EnabledForDto[];
}

export class FeaturesDto {
    @IsString()
    key: string;

    @ValidateNested()
    @Type(() => FeatureDto)
    value: FeatureDto;
}