import {
  EmptyException,
  MaxLengthExceededException,
} from "@core/domain/exceptions";
import { Password, UserAuth } from "../../domain/models";
import { UserAuthApi } from "../../infraestructure/drivers/models/user-auth-api.model";
import { createUserAuthFromApi } from "../../../../__tests__/features/auth/application/services/auth-factory.service";
import { Username } from "../../../user/domain";

describe("AuthFactoryService", () => {
  // Tests that the function creates a UserAuth object from a valid UserAuthApi object.
  it("test_create_user_auth_from_api_with_valid_object", () => {
    // Given
    const userAuthApi: UserAuthApi = {
      username: "testuser",
      password: "testpassword",
    };

    // When
    const result = createUserAuthFromApi(userAuthApi);

    // Then
    expect(result).toBeInstanceOf(UserAuth);
    expect(result.getUsername().getUsername()).toEqual(userAuthApi.username);
    expect(result.getPassword().getPassword()).toEqual(userAuthApi.password);
  });

  // Tests that the function throws EmptyStringException when username in UserAuthApi object is an empty string.
  it("test_create_user_auth_from_api_with_empty_username", () => {
    // Given
    const userAuthApi: UserAuthApi = {
      username: "",
      password: "testpassword",
    };

    // When, Then
    expect(() => createUserAuthFromApi(userAuthApi)).toThrow(EmptyException);
  });

  // Tests that the function throws EmptyStringException when password in UserAuthApi object is an empty string.
  it("test_create_user_auth_from_api_with_empty_password", () => {
    // Given
    const userAuthApi: UserAuthApi = {
      username: "textuser",
      password: "",
    };

    // When, Then
    expect(() => createUserAuthFromApi(userAuthApi)).toThrow(EmptyException);
  });

  // Tests that the function throws MaxLengthExceededException when username in UserAuthApi object exceeds the maximum length.
  it("test_create_user_auth_from_api_with_long_username", () => {
    // Given
    const longUsername = "a".repeat(Username.USERNAME_MAX_LENGTH + 1);
    const userAuthApi: UserAuthApi = {
      username: longUsername,
      password: "testpassword",
    };

    // When, Then
    expect(() => createUserAuthFromApi(userAuthApi)).toThrow(
      MaxLengthExceededException
    );
  });

  // Tests that the function throws MaxLengthExceededException when password in UserAuthApi object exceeds the maximum length.
  it("test_create_user_auth_from_api_with_long_password", () => {
    // Given
    const longPassword = "a".repeat(Password.PASSWORD_MAX_LENGTH + 1);
    const userAuthApi: UserAuthApi = {
      username: "testuser",
      password: longPassword,
    };

    // When, Then
    expect(() => createUserAuthFromApi(userAuthApi)).toThrow(
      MaxLengthExceededException
    );
  });
});
