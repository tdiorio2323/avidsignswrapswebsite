"use server";

import { Resend } from "resend";

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  details: string;
  location: string;
}

export async function submitQuoteRequest(formData: QuoteFormData) {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.projectType) {
      return {
        success: false,
        error: "Please fill in all required fields."
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: "Please enter a valid email address."
      };
    }

    // Initialize Resend with API key
    if (!process.env.RESEND_API_KEY) {
      return {
        success: false,
        error: "Email service is not configured. Please contact us directly."
      };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Quote Request <quotes@avidsigns.tdstudiosny.com>',
      to: [process.env.QUOTE_INBOX || 'ricky.avidsign@gmail.com'],
      subject: `New Quote Request - ${formData.projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1570EF; border-bottom: 2px solid #1570EF; padding-bottom: 10px;">
            New Quote Request
          </h1>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0; color: #333;">Project Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td>
                <td style="padding: 8px 0;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px 0;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
                <td style="padding: 8px 0;">${formData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Project Type:</td>
                <td style="padding: 8px 0;">${formData.projectType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Location:</td>
                <td style="padding: 8px 0;">${formData.location || 'Not specified'}</td>
              </tr>
            </table>
          </div>

          ${formData.details ? `
            <div style="background-color: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
              <h3 style="margin-top: 0; color: #333;">Project Details</h3>
              <p style="line-height: 1.6; color: #555;">${formData.details.replace(/\n/g, '<br>')}</p>
            </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p>This quote request was submitted through the Avid Signs & Wraps website.</p>
            <p><strong>Avid Signs & Wraps</strong><br>
            32 Carlin Street<br>
            Staten Island, NY<br>
            <a href="mailto:ricky.avidsign@gmail.com" style="color: #1570EF;">ricky.avidsign@gmail.com</a></p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        error: "Failed to send quote request. Please try again or call us directly."
      };
    }

    return {
      success: true,
      message: "Quote request sent successfully! We'll get back to you within 24 hours."
    };

  } catch (error) {
    console.error('Quote submission error:', error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again."
    };
  }
}