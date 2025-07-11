
export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                <div className="mt-2">
                    <a href="#"></a>
                    <a href="#" className="text-white hover:text-gray-400 mx-2">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}