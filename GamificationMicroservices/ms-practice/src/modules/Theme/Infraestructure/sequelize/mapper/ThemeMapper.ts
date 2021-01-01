import { ThemeResponse } from "../../../../../shared/application/response";
import { Theme } from "../../../Domain/Theme";
import ThemeDescription from "../../../Domain/ThemeDescription";
import ThemeId from "../../../Domain/ThemeId";
import ThemeName from "../../../Domain/ThemeName";
import { ThemeModel } from "../ThemeModel";

export class ThemeMapper {
    static convertThemeModelToTheme(themeModel: ThemeModel): Theme {
      return Theme.create(
        new ThemeId(themeModel.id),
        new ThemeName(themeModel.name),
        new ThemeDescription(themeModel.description)
      );
    }

    static convertThemeToThemeResponse(theme: Theme): ThemeResponse {
        return {
            id: theme._id._value,
            name: theme._name._value,
            description: theme._description._value
        }
      }
  }
