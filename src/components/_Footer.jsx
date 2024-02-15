function Footer() {
    return ( 
        <div className="w-full fixed bottom-0 p-14 bg-white100 flex flex-col">
            <div>
                <p>LAINOVO</p>
                <p>© 2021 Your Company. All rights reserved.</p>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <p className="font-semibold">Support</p>
                    <p>Questions</p>
                    <p>Questions</p>
                </div>
                <div>
                    <p className="font-semibold">Policy</p>
                    <p>Policy</p>
                    <p>Policy</p>
                    <p>Policy</p>
                </div>
            </div>
        </div>
     );
}

export default Footer;