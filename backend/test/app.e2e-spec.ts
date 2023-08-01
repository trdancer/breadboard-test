import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { controller_expected_1 } from '../src/part/test/fixtures';
import { PartModule } from '../src/part/part.module';
describe('PartController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PartModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/v1/part (GET)', () => {
    const partNumber = "0510210200"
    return request(app.getHttpServer())
      .get(`/part`)
      .query({partNumber: partNumber})
      .expect(controller_expected_1)
      .expect(200)
  });
});
