import LevelDescription from "./LevelDescription";
import LevelId from "./LevelId";
import LevelName from "./LevelName";

export class Level {
    constructor(
      private id: LevelId,
      private name: LevelName,
      private description: LevelDescription,
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

    public static create(
      id: LevelId,
      name: LevelName,
      description: LevelDescription,
    ): Level {
      let level = new Level(id, name, description);
      return level;
    }
  }
