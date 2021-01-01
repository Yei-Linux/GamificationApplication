import ThemeDescription from "./ThemeDescription";
import ThemeId from "./ThemeId";
import ThemeName from "./ThemeName";

export class Theme {
    constructor(
      private id: ThemeId,
      private name: ThemeName,
      private description: ThemeDescription,
    ) {}

    get _id(): ThemeId {
      return this.id;
    }

    get _name(): ThemeName {
      return this.name;
    }

    get _description(): ThemeDescription {
      return this.description;
    }

    public static create(
      id: ThemeId,
      name: ThemeName,
      description: ThemeDescription,
    ): Theme {
      let theme = new Theme(id, name, description);
      return theme;
    }
  }
