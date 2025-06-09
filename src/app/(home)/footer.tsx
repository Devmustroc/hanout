import React from 'react';

const Footer = () => {
    return (
        <footer
            className="flex items-center justify-center border-t font-medium p-6"
        >
            <div>
                <p className="text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} HANOUT. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;