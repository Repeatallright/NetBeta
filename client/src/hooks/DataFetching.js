import axios from "axios";

export class DataFetching {
  static ip = `192.168.0.107`;
  static adress = `http://${this.ip}`;
  static getUsers = async (commit) => {
    try {
      let response = await axios.get(`${this.adress}:4001/usersDate`);
      console.log("getting users data from server...");
      commit(JSON.parse(response.data));
    } catch (e) {
      console.log("Bad connection...");
      console.log(e);
    }
  };

  static getPosts = async (commit) => {
    try {
      let response = await axios.get(`${this.adress}:4001/postsDate`);
      console.log("getting posts data from server...");
      commit(JSON.parse(response.data));
    } catch (e) {
      console.log("Bad connection...");
      console.log(e);
    }
  };

  static setPosts = (postsDate) => {
    try {
      if (typeof postsDate != "object") return false;
      axios.post(`${this.adress}:4001/postsDate`, {
        postsDate: JSON.stringify(postsDate),
      });
    } catch (e) {
      console.log("Bad connection...");
    }
  };

  static setUsers = (usersDate) => {
    try {
      if (!usersDate[0]) return false;
      axios.post(`${this.adress}:4001/usersDate`, {
        usersDate: JSON.stringify(usersDate),
      });
    } catch (e) {
      console.log("Bad connection...");
    }
  };
}
