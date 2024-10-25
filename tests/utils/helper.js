class Helper {
  async getElementColorValue(element) {
    return await element.evaluate(el => getComputedStyle(el).color);
  }
}

export default Helper;
