import LevelDescription from "./LevelDescription";
import LevelId from "./LevelId";
import LevelImage from "./LevelImage";
import LevelName from "./LevelName";

export class Level {
    constructor(
      private id: LevelId,
      private name: LevelName,
      private description: LevelDescription,
      private imageUrl: LevelImage
    ) {}

    get _id(): LevelId {
      return this.id;
    }

    get _name(): LevelName {
      return this.name;
    }

    get _description(): LevelDescription {
      return this.description;
    }

    get _imageUrl(): LevelImage {
      return this.imageUrl;
    }

    public static create(
      id: LevelId,
      name: LevelName,
      description: LevelDescription,
      image: LevelImage
    ): Level {
      let level = new Level(id, name, description, image);
      return level;
    }
  }
