class Helper {
  static sanitize(val : any): string {
     return (val == "undefined") ? "" : (val == null) ? "" : val;
  }
}

export {Helper}
