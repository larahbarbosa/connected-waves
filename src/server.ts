import './util/module-alias';
import { Server } from '@overnightjs/core';
import { Application } from 'express';
import bodyParser from 'body-parser';
import { ForecastsController } from './controllers/forecast.test';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }
  private setupControllers(): void {
    const forecastController = new ForecastsController();
    this.addControllers([forecastController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
