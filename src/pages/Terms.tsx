import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using AutoNateAI services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p>
                AutoNateAI provides AI-powered research automation tools including but not limited to literature review assistance, grant writing support, and data pipeline building services. Our services are designed to enhance academic and research workflows.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p>
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing accurate information when creating accounts or making purchases</li>
                <li>Maintaining the confidentiality of login credentials</li>
                <li>Using the service in compliance with applicable laws and regulations</li>
                <li>Respecting intellectual property rights</li>
                <li>Not attempting to reverse engineer or misuse our AI systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Payment and Refunds</h2>
              <p>
                Payment is required for premium services. All sales are final unless otherwise specified. Refunds may be considered on a case-by-case basis within 30 days of purchase for legitimate technical issues that prevent service usage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data and Privacy</h2>
              <p>
                We respect your privacy and handle data according to our Privacy Policy. Users retain ownership of their research data and content. We may use aggregated, anonymized data to improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <p>
                AutoNateAI retains all rights to our platform, AI models, and proprietary technology. Users retain rights to their original research content while granting us limited rights to process and analyze such content to provide our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p>
                AutoNateAI is provided "as is" without warranties. We are not liable for any indirect, incidental, or consequential damages. Our liability is limited to the amount paid for our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Service Availability</h2>
              <p>
                We strive for high availability but do not guarantee uninterrupted service. Maintenance windows and updates may temporarily affect service availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform notifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="ml-4">
                Email: legal@autonateai.com<br />
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

export default Terms;