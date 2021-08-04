import axios from "axios";
import types from '../types';

const Blogs = {
  state: {
    data: [
      {
        poster: "../assets/images/blog-1.svg",
        posterTitle: 'blog-1',
        title: "Designing Dashboards",
        categories: ["Dashboard", "Development"],
        info: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.`,
      },
      {
        poster: "../assets/images/blog-2.svg",
        posterTitle: 'blog-2',
        title: "Vibrant Portraits of 2020",
        categories: ["Dashboard", "Development"],
        info: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.`,
      },
      {
        poster: "../assets/images/blog-2.svg",
        posterTitle: 'blog-3',
        title: "36 Days of Malayalam type",
        categories: ["Dashboard", "Development"],
        info: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.`,
      },
    ],
  },
  mutations: {
    SET_BLOGS({ data }, payload) {
      data.push(payload)
    }
  },
  actions: {
    async SET_BLOGS({ commit }) {
      const res = await axios.get('http://localhost:3000/api/blogs/all');
      const data = res.data;

      commit(types.SET_BLOGS, data);
      return data;
    },
  }
}

export default Blogs;