import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className=" bg-black">
                <section>
                    <div className="lg:grid grid-cols-3 lg:mx-32 text-center">
                        <div className="my-8">
                            <h4 className="text-white text-3xl font-semibold mb-1">Usefull Link</h4>
                            <p className="text-white">Homes</p>
                            <p className="text-white"> About Us</p>
                            <p className="text-white">  Blog</p>
                            <p className="text-white"> Contact Us</p>
                        </div>
                        <div className="my-8">
                            <h4 className="text-white text-3xl font-semibold mb-1">Contact Now</h4>
                            <p className="text-white">contact@gmail.com <br /> contact@gmail.com</p>
                            <p className=" text-white">101-123, Mapo-gu, Seogyo-dong <br /> 420-721, Gyeongsan-si</p>
                            <p className=" text-white">+82 2-123-4567 <br /> +82 51-123-4567</p>
                           
                        </div>
                        <div className="my-8">
                            <h4 className="text-white text-3xl font-semibold mb-1">Subscribe</h4>
                            <p className="text-white">Subscribe for our latest & Articles. We Won't Give You Spam Mails</p>
                            <form>
                                <div><input className="form-control w-75 rounded-md p-2 mx-auto text-base" type="email" placeholder="Email Address" aria-label="Search" />
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