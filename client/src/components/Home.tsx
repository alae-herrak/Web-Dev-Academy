import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Link } from "react-router-dom";
import HomeCard from "./HomeCard";
import codeImg from "../assets/codeImg.svg";

const Home = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <>
      <section className="p-5 text-center text-lg-start bg-dark text-light mt-5">
        <div className="container py-5">
          <div className="row align-items-center py-5">
            <div className="col">
              <h1>Web Dev Academy</h1>
              <p className="lead">
                Discover the power of web development with our comprehensive
                online platform. From HTML and CSS to JavaScript and beyond...
              </p>
              <p className="lead">
                Whether you're just starting out or looking to expand your
                expertise, our community of developers is here to support you
                every step of the way. Join us today and take your first step
                towards a career in web development!
              </p>
              <Link
                to={user.username === "" ? "/login" : "/courses"}
                className="btn btn-primary"
              >
                Start learning
              </Link>
            </div>
            <div className="col d-none d-lg-block">
              <img className="img-fluid" src={codeImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="container">
          <div className="row">
            <div className="col pb-5 text-center">
              <h2>What you will learn</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
              <HomeCard
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                title="HTML"
                desc="The language for building web pages"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
              <HomeCard
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                title="CSS"
                desc="The language for styling web pages"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
              <HomeCard
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                title="JavaScript"
                desc="The language for programing web pages"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
              <HomeCard
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                title="Bootstrap"
                desc="A framework for CSS"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
              <HomeCard
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                title="React"
                desc="A framework for JavaScript"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
              <HomeCard
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                title="Redux"
                desc="A state manager for React"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
              <HomeCard
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
                title="PHP"
                desc="A web server programming language"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
              <HomeCard
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                title="MySQL"
                desc="A relational database management system"
              />
            </div>
          </div>
          <div className="row">
          <div className="col pt-5 text-center">
          <Link
                to={user.username === "" ? "/login" : "/courses"}
                className="btn btn-dark btn-lg"
              >
                Start learning
              </Link>
          </div>
        </div>
        </div>
      </section>

      <section className="bg-primary text-light text-center p-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 py-3 py-md-0">
            <h3 className="m-0">+20 Additional Resources</h3>
          </div>
          <div className="col-12 col-md-4 py-3 py-md-0">
            <h3 className="m-0">Community Posts</h3>
          </div>
          <div className="col-12 col-md-4 py-3 py-md-0">
            <h3 className="m-0">Blog Section</h3>
          </div>
        </div>
      </div>
    </section>

    <footer className="text-white bg-dark">
      <div className="container py-4 py-lg-5">
        <div className="row justify-content-start">
          <div
            className="col-sm-4 col-md-3 text-center text-sm-start d-flex flex-column"
          >
            <h3 className="fs-6 text-white">Services</h3>
            <ul className="list-unstyled">
              <li><Link to={user.username===''?'/login':'/courses'} className="link-light">Courses</Link></li>
              <li><Link to={user.username===''?'/login':'/resources'} className="link-light">Resources</Link></li>
              <li><Link to={user.username===''?'/login':'/community'} className="link-light">Community</Link></li>
              <li><Link to={user.username===''?'/login':'/blog'} className="link-light">Blog</Link></li>
            </ul>
          </div>
          <div
            className="col-sm-4 col-md-3 text-center text-sm-start d-flex flex-column"
          >
            <h3 className="fs-6 text-white">About</h3>
            <ul className="list-unstyled">
              <li><Link to='/company' className="link-light">Company</Link></li>
              <li><Link to='/team' className="link-light">Team</Link></li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="mb-0 text-center text-sm-start">Copyright © 2023 Web Dev Academy</p>
      </div>
    </footer>
    </>
  );
};

export default Home;
