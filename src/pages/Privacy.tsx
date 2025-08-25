import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p>
                We collect information to provide and improve our AI-powered research services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Account Information:</strong> Email, name, and payment details when you create an account or make purchases</li>
                <li><strong>Research Content:</strong> Documents, queries, and data you submit for processing through our AI tools</li>
                <li><strong>Usage Data:</strong> How you interact with our platform, including features used and time spent</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies for platform functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p>
                Your information is used to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide AI-powered research assistance and analysis</li>
                <li>Process payments and manage your account</li>
                <li>Improve our AI models and services (using anonymized data)</li>
                <li>Send important updates about your account and our services</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Ensure platform security and prevent misuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Data Processing and AI Training</h2>
              <p>
                We process your research content to provide our services. Your data may be used to improve our AI models, but only in anonymized and aggregated forms that cannot identify you or your specific research. We do not share your raw research content with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information. We may share information only in these limited circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With service providers who help us operate our platform (under strict confidentiality agreements)</li>
                <li>When required by law or to protect our rights and users' safety</li>
                <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption in transit and at rest</li>
                <li>Regular security audits and monitoring</li>
                <li>Access controls and authentication measures</li>
                <li>Secure cloud infrastructure with reputable providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
              <p>
                We retain your data as long as your account is active or as needed to provide services. Research content is typically retained for 2 years after last access to enable continuity of work. You can request deletion of your data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and download your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of non-essential communications</li>
                <li>Export your research content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance your experience, remember your preferences, and analyze platform usage. You can control cookie settings through your browser, though some features may not function properly if disabled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. International Users</h2>
              <p>
                If you're accessing our services from outside the United States, your data may be transferred to and processed in the US. We ensure appropriate safeguards are in place for international data transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy to reflect changes in our practices or legal requirements. We'll notify you of significant changes via email or platform notifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p>
                For privacy-related questions or to exercise your rights, contact us at:
              </p>
              <p className="ml-4">
                Email: privacy@autonateai.com<br />
                Address: AutoNateAI, 123 Research Drive, Innovation City, CA 90210
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;