import classes from "./content.module.css";
import Blog from "../Blogs/Blog";
import SearchBox from '../../UI/searchBox/SearchBox';
import Title from "../../UI/title/Title";
import Pagination from "../../UI/pagination/Pagination";
const Content = () => {
  return (
    <div className={classes.contentContainer}>
      <div className={classes.quote}>
          <div>
                  <Title title="Search" width="220px" />
                  <SearchBox />
          </div>
          <div>
                  <Title title="Catégories" width="290px"/>
                  <div>
                    <h4 className={classes.cat}>Fitness</h4>
                    <hr />
                    <h4 className={classes.cat}>Gym</h4>

                  </div>
          </div>
      </div>
      <Blog />
    </div>
  );
};

export default Content;