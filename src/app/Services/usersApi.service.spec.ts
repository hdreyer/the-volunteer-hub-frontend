import { TestBed } from "@angular/core/testing";

import { UsersApiService } from "./usersApi.service";

describe("UsersApiService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: UsersApiService = TestBed.get(UsersApiService);
    expect(service).toBeTruthy();
  });
});
