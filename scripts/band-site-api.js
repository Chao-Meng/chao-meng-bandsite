//sprint-3
class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  async postComment(comment) {
    try {
      const response = await axios.post(
        `${this.baseUrl}comments?api_key=${this.apiKey}`,
        comment
      );
      return response.data;
    } catch (error) {
      console.error(error, " happens when posting comment");
      throw error;
    }
  }

  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseUrl}comments?api_key=${this.apiKey}`
      );
      const sortedComments = response.data.sort((a, b) => {
        return a.timestamp - b.timestamp;
      });
      console.log("test sort", sortedComments);
      return sortedComments;
    } catch (error) {
      console.log(error, " happens when getting comment");
    }
  }
  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}showdates?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (error) {
      console.log(error, " happens when getting shows");
    }
  }
  async deleteComments() {
    try {
      const response = await axios.delete(
        `${this.baseUrl}comments${commentId}`
      );
    } catch (error) {
      console.log(error, " happens when getting comment");
    }
  }
}

export default BandSiteApi;
