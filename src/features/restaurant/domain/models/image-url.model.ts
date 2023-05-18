import {
  maxLength,
  notUndefinedOrNull
} from "@core/domain/services";

export class ImageUrl {
  public static readonly IMAGE_MAX_LENGTH = 250;

  constructor(private imageUrl: string) {
    notUndefinedOrNull(imageUrl);
    maxLength(imageUrl, ImageUrl.IMAGE_MAX_LENGTH);
    this.imageUrl = imageUrl;
  }

  public getImageUrl(): string {
    return this.imageUrl;
  }
}
