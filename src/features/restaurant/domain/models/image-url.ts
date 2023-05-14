import { notUndefinedOrNull } from "@core/domain/services/field-not-provided-validator.service";
import { notEmptyString } from "@core/domain/services/not-empty-validator.service";

export class ImageUrl {
  constructor(private imageUrl: string) {
    notUndefinedOrNull(imageUrl);
    notEmptyString(imageUrl);
    this.imageUrl = imageUrl;
  }
}
