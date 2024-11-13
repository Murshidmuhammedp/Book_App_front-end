// import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-14">
            <div className="container mx-auto grid grid-cols-2 gap-4 md:grid-cols-5">
                <div>
                    <h4 className="font-semibold mb-3">Home</h4>
                    <ul>
                        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Blogs</a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Resources <span className="bg-gray-700 text-white text-xs ml-1 px-1 rounded">New</span></a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Testimonials</a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Newsletter</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">News</h4>
                    <ul>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Trending Stories</a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Featured Videos</a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Technology</a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Health</a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Politics</a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Environment</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Blogs</h4>
                    <ul>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Quantum Computing</a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">AI Ethics</a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Space Exploration</a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Biotechnology <span className="bg-gray-700 text-white text-xs ml-1 px-1 rounded">New</span></a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Renewable Energy</a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">Biohacking</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Podcasts</h4>
                    <ul>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">AI Revolution</a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">AI Revolution <span className="bg-gray-700 text-white text-xs ml-1 px-1 rounded">New</span></a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">TechTalk AI</a></li>
                        <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white">AI Conversations</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Resources</h4>
                    <ul>
                        <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white border border-gray-500 p-3 rounded-lg">Whitepapers</a></li>
                        <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white border border-gray-500 p-3 rounded-lg">Ebooks</a></li>
                        <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white border border-gray-500 p-3 rounded-lg">Reports</a></li>
                        <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white border border-gray-500 p-3 rounded-lg">Research Papers</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm order-last md:order-first mt-4 md:mt-0">
                    Terms & Conditions | Privacy Policy
                </p>
                {/* <div className="flex space-x-4 mt-4">
                    <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-gray-400 hover:text-white"
                        >
                            <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.949 13.949 0 011.671 3.15a4.923 4.923 0 001.524 6.573 4.903 4.903 0 01-2.229-.616c-.053 2.281 1.581 4.415 3.949 4.89a4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.604 3.419A9.874 9.874 0 010 19.54a13.913 13.913 0 007.548 2.213c9.057 0 14.01-7.498 14.01-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0024 4.557z" />
                        </svg>
                    </a>
                    <a href="https://www.facebook.com" className="text-gray-400 hover:text-white bg-white">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/59/59439.png"
                            alt="Facebook"
                            className="w-6 h-6"
                            width={24}
                            height={24}
                        />
                    </a>
                    <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
                        <Image
                            src="https://www.citypng.com/public/uploads/preview/hd-black-linkedin-in-icon-text-symbol-sign-png-7017516950456912bpmmmpwj3.png"
                            alt="LinkedIn"
                            className="w-6 h-6"
                            width={24}
                            height={24}
                        />
                    </a>
                </div> */}
                <p className="text-gray-400 text-sm mt-4">
                    &copy; 2024 FutureTech. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;