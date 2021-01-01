import { Theme } from "../../Theme/Domain/Theme";
import ThemeDescription from "../../Theme/Domain/ThemeDescription";
import ThemeId from "../../Theme/Domain/ThemeId";
import ThemeName from "../../Theme/Domain/ThemeName";
import RoadMapEmail from "./RoadMapEmail";
import RoadMapId from "./RoadMapId";
import RoadMapOrder from "./RoadMapOrder";

export class RoadMap {
    constructor(
      private id: RoadMapId,
      private userEmail: RoadMapEmail,
      private themesStudyMethods: any[],
      private order: RoadMapOrder,
      private wasView: boolean
    ) {}

    get _id(): RoadMapId {
      return this.id;
    }

    get _userEmail(): RoadMapEmail {
      return this.userEmail;
    }

    get _order(): RoadMapOrder {
      return this.order;
    }

    get _wasView(): boolean {
      return this.wasView;
    }

    public static create(
      id: RoadMapId,
      userEmail: RoadMapEmail,
      themesStudyMethods: any[],
      order: RoadMapOrder,
      wasView: boolean
    ): RoadMap {
      let roadMap = new RoadMap(id, userEmail, themesStudyMethods, order, wasView);
      return roadMap;
    }
  }
