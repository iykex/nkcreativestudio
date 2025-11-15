import * as React from 'react';

interface UserConfirmationTemplateProps {
  name: string;
}

export function UserConfirmationTemplate({ name }: UserConfirmationTemplateProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thank You for Your Message</title>
        <style>
          {`
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #171717;
              background-color: #fafafa;
              margin: 0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 0;
              border: 1px solid #e8e8e8;
              border-radius: 12px;
              background-color: #fafafa;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
              overflow: hidden;
            }
            .header {
              background: #4f46e5;
              padding: 30px 20px;
              text-align: center;
              color: #fafafa;
            }
            .header h2 {
              margin: 0;
              font-size: 24px;
              font-weight: 300;
              letter-spacing: 0.5px;
            }
            .content {
              padding: 40px 30px;
              background-color: #fafafa;
            }
            .content p {
              margin-bottom: 16px;
              font-size: 15px;
              line-height: 1.7;
            }
            .content p:first-of-type {
              color: #171717;
              font-size: 16px;
            }
            .highlight {
              color: #4f46e5;
              font-weight: 600;
            }
            .footer {
              margin-top: 20px;
              padding: 25px 20px;
              text-align: center;
              font-size: 12px;
              color: #52525b;
              background-color: #f1f5f9;
              border-top: 1px solid #e8e8e8;
            }
            .signature {
              color: #171717;
              margin-top: 25px;
              padding-top: 25px;
              border-top: 1px solid #e8e8e8;
            }
            .signature p {
              margin: 8px 0;
              color: #52525b;
            }
            .signature p:last-child {
              color: #4f46e5;
              font-weight: 500;
            }
            @media (max-width: 600px) {
              body {
                padding: 10px;
              }
              .content {
                padding: 30px 20px;
              }
              .header {
                padding: 25px 15px;
              }
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <h2>Thank You for Your Message</h2>
          </div>
          <div className="content">
            <p>Hi <span className="highlight">{name}</span>,</p>
            <p>We have received your message and will get back to you as soon as possible.</p>
            <p>Our team typically responds within 24 hours during business days.</p>
            
            <div className="signature">
              <p>Best regards,</p>
              <p>The AP Creative Studio Team</p>
            </div>
          </div>
          <div className="footer">
            <p>&copy; {new Date().getFullYear()} AP Creative Studio. All rights reserved.</p>
            <p style={{marginTop: '8px', color: '#52525b'}}>
              If you have any urgent questions, please don't hesitate to contact us directly.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}