import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to ClearCat
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Terms and Conditions
            </h1>
            <p className="text-charcoal/70">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-charcoal space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-charcoal mb-4">1. Acceptance of Terms</h2>
              <p className="text-charcoal/80 leading-relaxed">
                By accessing and using ClearCat ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-charcoal mb-4">2. Service Description</h2>
              <p className="text-charcoal/80 leading-relaxed">
                ClearCat is an AI-powered expense tracking application that helps users categorize and analyze their financial transactions from bank statements. The service is currently in development and available for waitlist signup.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-charcoal mb-4">3. Waitlist Terms</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                By joining our waitlist, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                <li>Provide accurate and current email information</li>
                <li>Receive promotional emails about ClearCat's launch and features</li>
                <li>Understand that waitlist position does not guarantee service access</li>
                <li>Allow us to contact you when the service becomes available</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-charcoal mb-4">4. Privacy and Data Protection</h2>
              <p className="text-charcoal/80 leading-relaxed">
                We are committed to protecting your privacy. Your email address and any feedback provided will be used solely for the purpose of communicating about ClearCat's development and launch. We will not sell, rent, or share your personal information with third parties without your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-charcoal mb-4">5. Intellectual Property</h2>
              <p className="text-charcoal/80 leading-relaxed">
                All content, features, and functionality of ClearCat, including but not limited to text, graphics, logos, and software, are owned by ClearCat and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-charcoal mb-4">6. User Conduct</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                <li>Use the service for any unlawful purpose or to solicit unlawful activity</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the service or servers connected to the service</li>
                <li>Submit false or misleading information during waitlist signup</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-charcoal mb-4">7. Service Availability</h2>
              <p className="text-charcoal/80 leading-relaxed">
                ClearCat is currently under development. We make no guarantees about service availability, launch dates, or final feature sets. The service may be modified, suspended, or discontinued at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-charcoal mb-4">8. Limitation of Liability</h2>
              <p className="text-charcoal/80 leading-relaxed">
                In no event shall ClearCat, its directors, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-charcoal mb-4">9. Disclaimers</h2>
              <p className="text-charcoal/80 leading-relaxed">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this company excludes all representations, warranties, conditions and terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-charcoal mb-4">10. Changes to Terms</h2>
              <p className="text-charcoal/80 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of the service after such changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-charcoal mb-4">11. Governing Law</h2>
              <p className="text-charcoal/80 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-charcoal mb-4">12. Contact Information</h2>
              <p className="text-charcoal/80 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at{' '}
                <a 
                  href="mailto:hello@clearcat.co.uk" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  hello@clearcat.co.uk
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-accent/10 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 text-accent flex-shrink-0 mt-1">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-2">
                  Questions about our terms?
                </h3>
                <p className="text-charcoal/70 text-sm">
                  We're here to help! Reach out to our team if you need any clarification about these terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;