import React from "react";
import { Grid } from "@material-ui/core";
import PostCard from "./PostCard";
import axios from "axios";


class MediumSlider extends React.Component {
  bloggerURL =
    "https://www.googleapis.com/blogger/v3/blogs/8321809148473833824/posts?key=AIzaSyBREYd6G2EhyIUxBN-RjtY2Utz6zHjVOLo";
  async componentDidMount() {
    await axios
      .get(this.bloggerURL)
      .then(async (res) => await res.data)
      .then((data) => {
        console.log(data)
      });
  }

  render() {
    return (
      <div>
        
      </div>
      );
  }
}


// wrapper for items
// class MediumSlider extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { itemRows: [], avatar: "", profileLink: "" };
//   }
//   mediumURL =
//     "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@marketing_63160";
//   async componentDidMount() {
//     await axios
//       .get(this.mediumURL)
//       .then(async (res) => await res.data)
//       .then((data) => {
//         // create two-dimensional array with 3 elements per inner array
//         const avatar = data.feed.image;
//         const profileLink = data.feed.link;
//         const res = data.items; //This is an array with the content. No feed, no info about author etc..
//         const posts = res.filter((item) => item.categories.length > 0);

//         this.setState({ avatar: avatar, profileLink: profileLink });
//         const itemRows = [];
//         posts.forEach((item, i) => {
//           item["avatar"] = this.state.avatar; // push avatar inside the json
//           item["profilelink"] = this.state.profileLink; // push profile link inside the JSON
//           const row = Math.floor(i / 3);
//           if (!itemRows[row]) itemRows[row] = [];
//           itemRows[row].push(item);
//         });

//         this.setState({ itemRows: itemRows });
//       });
//   }
//   render() {
//     const { itemRows } = this.state;

//     return (
//       <Grid container spacing={1} style={{marginTop: '2rem'}}>
//         {itemRows.map((row, id) =>
//           row.map((item, key) => <PostCard {...item} key={key} />)
//         )}
//       </Grid>
//     );
//   }
// }
export default MediumSlider;