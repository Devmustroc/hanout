import React from 'react';

function FeaturesPage() {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-primary/10 to-transparent text-black"
        >
            <h1 className="text-4xl font-bold mb-8">Features</h1>
            <p className="text-lg mb-4">Explore the amazing features of our application.</p>
            <ul className="list-disc list-inside">
                <li>Feature 1: User-friendly interface</li>
                <li>Feature 2: High performance</li>
                <li>Feature 3: Secure and reliable</li>
                <li>Feature 4: Customizable settings</li>
                <li>Feature 5: Regular updates and support</li>
            </ul>
        </div>
    );
}

export default FeaturesPage;