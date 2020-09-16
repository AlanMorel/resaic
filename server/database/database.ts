import User from "./models/user";
import { ModelCtor, Model } from "sequelize";

export default (): Array<ModelCtor<Model<any, any>>> => [ User ];
