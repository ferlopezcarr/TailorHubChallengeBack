import { notUndefinedOrNull, notEmptyString } from "@core/domain/services";

export class ImageUrl {
  constructor(private imageUrl: string) {
    notUndefinedOrNull(imageUrl);
    notEmptyString(imageUrl);
    this.imageUrl = imageUrl;
  }
}
