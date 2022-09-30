import Axios from "axios";

class blogService {
  static getBlogs() {
    return new Promise((resolve, reject) => {
      Axios.get(process.env.REACT_APP_API_ROUTE + "/api/getblogs")
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static addBlog(day, blog) {
    let data = {
      day: day,
      blog: blog,
    };
    return new Promise((resolve, reject) => {
      Axios.post(process.env.REACT_APP_API_ROUTE + "/api/addblog", data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static getDayBlog(day) {
    return new Promise((resolve, reject) => {
      Axios.get(process.env.REACT_APP_API_ROUTE + "/api/getblog/" + day)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default blogService;
