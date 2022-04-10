class PropertyManager {
  static getValueOrDefault = <T>(property: T, defaultVal: T): T => {
    let retProperty = property;
    if (typeof property === "undefined") {
      retProperty = defaultVal;
    }
    return retProperty;
  };

  static isDefined = (value: any) =>
    value !== null && typeof value !== "undefined";

  static hasProperty = (obj: any, propertyName: string) => {
    if (
      !PropertyManager.isDefined(obj) ||
      !PropertyManager.isDefined(propertyName)
    ) {
      return false;
    }
    const postDot = propertyName.indexOf(".");
    if (postDot === -1) {
      return Object.prototype.hasOwnProperty.call(obj, propertyName);
    }

    if (postDot > 0 && postDot < propertyName.length - 1) {
      return Object.prototype.hasOwnProperty.call(
        obj,
        propertyName.substring(0, postDot)
      );
    }
    console.log(`Invalid use PropertyManager.hasProperty [${propertyName}]`);
    return false;
  };

  static getValue(model: any, propertyName: any): any {
    if (!model) {
      throw new Error("PropertyManager.getValue model is undefined");
    }
    if (!propertyName) {
      throw new Error("PropertyManager.getValue propertyName is undefined");
    }
    const postDot = propertyName.indexOf(".");
    if (postDot === -1) {
      return model[propertyName];
    }
    if (postDot > 0 && postDot < propertyName.length - 1) {
      const propFirstBlock = propertyName.substring(0, postDot);
      const propSecondBlock = propertyName.substring(
        postDot + 1,
        propertyName.length
      );
      const subModel = model[propFirstBlock];
      if (subModel) {
        return PropertyManager.getValue(subModel, propSecondBlock);
      }
      return "";
    }
    throw new Error(`PropertyManager.hasProperty [${propertyName}]`);
  }
}

export default PropertyManager;
