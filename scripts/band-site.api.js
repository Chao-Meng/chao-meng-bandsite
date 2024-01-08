//sprint-3
class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  async postComment(comment) {
    try {
      const response = await axios.post(
        `${this.baseUrl}?api_key=${this.apiKey}`,
        comment
      );
      return response.data;
    } catch (error) {
      console.log(error, " happens when posting comment");
    }
  }

  async getComment() {
    try {
      const response = await axios.get(
        `${this.baseUrl}?api_key=${this.apiKey}`
      );
      console.log(response.data);
    } catch (error) {}
  }
}
