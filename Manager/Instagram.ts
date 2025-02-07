import axios from "axios";

export class InstagramManager {
  baseUrl: string = "https://graph.instagram.com/v22.0";
  static instance: InstagramManager | null = null;

  static getInstance() {
    if (InstagramManager.instance) {
      return InstagramManager.instance;
    }   
    InstagramManager.instance = new InstagramManager();
    return InstagramManager.instance;
  }

  async getUserDetails(access_token: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/me`, {
        params: {
          fields: "id,username,account_type,media_count,followers_count",
          access_token,
        },
      });
      return { data: response.data, status: response.status };
    } catch (error) {
      throw error;
    }
  }

  async getMediaDetails(access_token: string, id: string) {
    try {
      const { data } = await axios.get(`${this.baseUrl}/${id}/media`, {
        params: {
          fields: "id,username,account_type,media_count,followers_count",
          access_token,
        },
      });
      const postsMetaData = data;
      const Posts = await Promise.all(
        postsMetaData.data.map(async ({ id }) => {
          const postDetail = await this.getPostInfo(id, access_token);
          return postDetail;
        })
      );
      return Posts;
    } catch (error) {
      throw error;
    }
  }

  async getPostInfo(postId: string, access_token: string) {
    const { data } = await axios.get(`${this.baseUrl}/${postId}`, {
      params: {
        fields: "id,media_type,media_url,username,timestamp,comments",
        access_token,
      },
    });
    return data;
  }
}
