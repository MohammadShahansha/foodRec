import React from 'react';

const Footer = () => {
    return (
        <div>
            <p>dont copy my website</p>
            <footer className=" bg-black ">
                <section>
                    <div className="grid grid-cols-3 mx-32">
                        {/* <div className="col-sm-12 col-lg-3 for-margin">

                            <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </div> */}
                        <div className="">
                            <h4 className="text-white text-3xl font-semibold">Usefull Link</h4>
                            <p className="text-white">Homes</p>
                            <p className="text-white"> About Us</p>
                            <p className="text-white"> Cases</p>
                            <p className="text-white">  Blog</p>
                            <p className="text-white"> Contact Us</p>
                        </div>
                        <div className="">
                            <h4 className="text-white">Contact Now</h4>
                            <p className=" text-white">555 4th 5t NW, Washington <br /> DC 20530, United States</p>
                            <p className=" text-white">+88 01750 000 000 <br /> +88 01750 000 000</p>
                            <p className="text-white">info@gmail.com <br /> info@gmail.com</p>
                        </div>
                        <div className="col-sm-12 col-lg-3 for-margin">
                            <h4 className="text-white">Subscribe</h4>
                            <p className="text-white">Subscribe for our latest & Articles. We Won't Give You Spam Mails</p>
                            <form>
                                <div><input className="form-control w-75 m-auto" type="email" placeholder="Email Address" aria-label="Search" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

            </footer>
        </div>
    );
};

export default Footer;