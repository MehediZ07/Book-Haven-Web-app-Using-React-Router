import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-[#23be0a] text-base font-medium bg-green-50  p-10 mt-12">
      <nav>
        <h6 className="text-lg text-[#23be0a] font-bold  ">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="text-lg text-[#23be0a] font-bold ">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="text-xl text-[#23be0a] font-bold ">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="text-lg text-[#23be0a] font-bold">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-[#23be0a]">
              Enter your email address
            </span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered border solid border-[#23be0a] join-item"
            />
            <button className="btn bg-[#23be0a] border solid border-[#23be0a] text-white join-item">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
