import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header theme="solid" />
            <main className="flex-grow pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">Terms of Service</h1>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                        <p>Last Updated: December 30, 2025</p>

                        <h3>1. Agreement to Terms</h3>
                        <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Gwo Piña Buchanan ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").</p>

                        <h3>2. Intellectual Property Rights</h3>
                        <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>

                        <h3>3. User Representations</h3>
                        <p>By using the Site, you represent and warrant that:</p>
                        <ul>
                            <li>All registration information you submit will be true, accurate, current, and complete.</li>
                            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                            <li>You are not a minor in the jurisdiction in which you reside.</li>
                        </ul>

                        <h3>4. Prohibited Activities</h3>
                        <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>

                        <h3>5. Disclaimer</h3>
                        <p>The Site is provided on an as-is and as-available basis. You agree that your use of the Site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the Site and your use thereof.</p>

                        <h3>6. Contact Us</h3>
                        <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us via our contact page.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
