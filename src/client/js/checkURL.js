//function to test if the url valid or not
function checkForURL(url_test) {
    let url;
    try {
      url = new URL(url_test);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }
export { checkForURL }
