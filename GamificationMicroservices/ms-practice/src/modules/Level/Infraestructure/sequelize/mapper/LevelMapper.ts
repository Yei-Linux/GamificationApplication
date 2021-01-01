import { LevelResponse } from '../../../../../shared/application/response';
import { Level } from '../../../Domain/Level';
import LevelDescription from '../../../Domain/LevelDescription';
import LevelId from '../../../Domain/LevelId';
import LevelImage from '../../../Domain/LevelImage';
import LevelName from '../../../Domain/LevelName';
import { LevelModel } from '../LevelModel';

export class LevelMapper {
  static convertLevelModelToLevel(levelModel: LevelModel): Level {
    return Level.create(
      new LevelId(levelModel.id),
      new LevelName(levelModel.name),
      new LevelDescription(levelModel.description),
      new LevelImage(levelModel.imageUrl),
    );
  }

  static convertLevelToLevelResponse(level: Level): LevelResponse {
    return {
        id: level._id._value,
        name: level._name._value,
        description: level._description._value,
        imageUrl: level._imageUrl._value
    }
  }
}
