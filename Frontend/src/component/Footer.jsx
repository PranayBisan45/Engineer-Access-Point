const Footer = () => {
    return (
        <footer className="bg-sky-200 text-white py-8 mt-40">
            <div className="container mx-auto flex flex-nowrap justify-around">
                <div className="w-full sm:w-1/3 mb-6 ml-10">
                    <h4 className="text-xl pb-2 mb-4 text-sky-900 font-bold">About Us</h4>
                    <p className="text-sky-600">Introducing Engineer Access Point, an innovative online portal for seamless access to civil engineering services. Our user-friendly platform simplifies discovering facilities and scheduling appointments with experienced engineers. Enjoy unparalleled convenience as you explore and book various engineering services tailored to your needs.</p>
                </div>
                <div className="w-full sm:w-1/3 mb-6 ml-28">
                    <h4 className="text-xl pb-2 mb-4 text-sky-900 font-bold">Contact</h4>
                    <p> <span className="text-sky-800 font-bold">Email: </span> <span className="text-sky-600 hover:text-sky-900">pranaybisan45@gmail.com</span></p>
                    <p> <span className="text-sky-800 font-bold"> Phone:</span> <span className="text-sky-600 hover:text-sky-900">+91 9552007193</span></p>
                </div>
                <div className="w-full sm:w-1/3 mb-6">
                    <h4 className="text-xl pb-2 mb-4 text-sky-900 font-bold">General</h4>
                    <ul className="list-none">
                        <li className="inline mr-4"><a href="/Home" className="text-sky-600 hover:text-sky-900">Home</a></li>
                        <li className="inline mr-4"><a href="/Facilities" className="text-sky-600 hover:text-sky-900">Facilities</a></li>
                        <li className="inline mr-4"><a href="/Appointment" className="text-sky-600 hover:text-sky-900">Appointment</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center border-t border-sky-700 pt-4 mt-4">
                <p className="text-sky-600">&copy; 2024 Engineer Access Point. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
