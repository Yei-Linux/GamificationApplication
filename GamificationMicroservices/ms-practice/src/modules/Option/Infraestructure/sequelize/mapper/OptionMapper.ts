import { OptionResponse } from "../../../../../shared/application/response";
import { Option } from "../../../Domain/Option";
import OptionId from "../../../Domain/OptionId";
import OptionText from "../../../Domain/OptionText";
import { OptionModel } from "../OptionModel";

export class OptionMapper {
    static convertOptionModelToOption(optionModel: OptionModel): Option {
      return Option.create(
        new OptionId(optionModel.id),
        new OptionText(optionModel.text),
        optionModel.isAnswer,
        null
      );
    }

    static convertOptionsModelToOptions(optionsModel: OptionModel[]) : Option[] {
        return optionsModel.map((optionModel: OptionModel) =>{
            return OptionMapper.convertOptionModelToOption(optionModel);
        })
    }

    static convertOptionToOptionResponse(option : Option) : OptionResponse {
        return {
            id: option._id._value,
            text: option._text._value,
            isAnswer: option._isAnswer
        }
    }

    static convertOptionsToOptionsResponse(options : Option[]) : OptionResponse[] {
        return options.map((option: Option) => {
            return OptionMapper.convertOptionToOptionResponse(option);
        })
    }
  }
