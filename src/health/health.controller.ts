import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, HttpHealthIndicator, HealthCheck } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(private health: HealthCheckService, private http: HttpHealthIndicator) {}

  @Get()
  @HealthCheck()
  async check() {
    const applications = await Promise.all([
      this.health.check([() => this.http.pingCheck('frontend', 'http://localhost:3000')]),
      this.health.check([() => this.http.pingCheck('backend', 'http://localhost:8288/v1')]),
    ]);

    return applications;
  }
}
