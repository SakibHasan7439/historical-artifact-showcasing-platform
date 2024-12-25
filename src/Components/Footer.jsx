import { Link } from "react-router-dom";
import logo from "../assets/artifacts_logo.png"
import spinningRock from "../assets/footerRock.png"

const Footer = () => {
  return (
    <footer className="footer justify-around bg-base-200 text-base-content p-10">
      <aside>
        <img className="md:w-48" src={logo} alt="" />
        <p className="text-lg">
          Artifacts Tracker Ltd.  
        </p>
        <h6 className="footer-title">Explore The Exclusive Collections</h6>
          <Link to={"/all-artifacts"} className="px-5 py-3 text-white transition hover:-translate-y-2 hover:bg-[#917b64] duration-200 rounded-md bg-[#C4A484] shadow-md shadow-slate-500">Collections</Link>
          <p className="text-lg">&copy; 2024 Your Website Name. All rights reserved.</p>
      </aside>
      <nav className="font-playfair text-lg">
        <h6 className="footer-title">Quick Links</h6>
        <Link to={"/"} className="link link-hover">Home</Link>
        <Link to={"/all-artifacts"} className="link link-hover">All Artifacts</Link>
        <Link className="link link-hover">Add Artifacts</Link>
        <a className="link link-hover">Advertisement</a>
      </nav>

      <nav className="">
        <img className="w-20 tooltip text-black animate-rotateFull hover:animate-none" data-tip="oldowan stone tools" src={spinningRock} alt="" />
        <label className="text-xl font-playfair">Subscribe Now...</label>
        <input type="email" name="" id="" className="border-2 w-full px-2 py-3 rounded-md" />
        <button className="px-6 py-3 text-white transition hover:-translate-y-2 hover:bg-[#917b64] duration-200 rounded-md bg-[#C4A484] shadow-md shadow-slate-500">Submit</button>
      </nav>
    </footer>
  );
};

export default Footer;
