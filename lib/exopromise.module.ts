import { DynamicModule, Module } from "@nestjs/common";
import { ExopromiseController } from "./exopromise.controller";
import { EXOPROMISE_OPTIONS } from "./exopromise.option";

@Module({})
export class ExopromiseModule {
  static register(options: { baseUrl: string }): DynamicModule {
    Object.assign(EXOPROMISE_OPTIONS, options);
    return {
      module: ExopromiseModule,
      controllers: [ExopromiseController],
    };
  }
}
