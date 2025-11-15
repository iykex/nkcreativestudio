import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  location: string;
  phone: string;
  date: string;
  details: string;
}

export function EmailTemplate({ name, email, location, phone, date, details }: EmailTemplateProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Message from Your Website</title>
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
            .field-group {
              margin-bottom: 20px;
              padding: 15px;
              background-color: #f1f5f9;
              border-radius: 8px;
              border-left: 4px solid #4f46e5;
            }

            /* label + value side-by-side */
            .row {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              gap: 10px;
            }
            .field-label {
              width: 40%;
              font-weight: 600;
              color: #171717;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .field-value {
              width: 60%;
              color: #52525b;
              font-size: 15px;
              line-height: 1.5;
            }

            .details-content {
              background-color: #fafafa;
              padding: 15px;
              border-radius: 6px;
              border: 1px solid #e8e8e8;
              margin-top: 10px;
              line-height: 1.7;
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
            .info-badge {
              display: inline-block;
              background: #4f46e5;
              color: #fafafa;
              padding: 8px 16px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 500;
              margin-bottom: 10px;
              letter-spacing: 0.5px;
            }
            @media (max-width: 600px) {
              .row {
                flex-direction: column;
              }
              .field-label, .field-value {
                width: 100%;
              }
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <h2>New Website Message</h2>
            <div className="info-badge">Action Required</div>
          </div>
          <div className="content">
            <div className="field-group">
              <div className="row">
                <span className="field-label">Name</span>
                <span className="field-value">{name}</span>
              </div>
            </div>

            <div className="field-group">
              <div className="row">
                <span className="field-label">Email</span>
                <span className="field-value">{email}</span>
              </div>
            </div>

            <div className="field-group">
              <div className="row">
                <span className="field-label">Phone</span>
                <span className="field-value">{phone}</span>
              </div>
            </div>

            <div className="field-group">
              <div className="row">
                <span className="field-label">Location</span>
                <span className="field-value">{location}</span>
              </div>
            </div>

            <div className="field-group">
              <div className="row">
                <span className="field-label">Message Date</span>
                <span className="field-value">{date}</span>
              </div>
            </div>

            <div className="field-group">
              <span className="field-label">Project Details</span>
              <div className="details-content">{details}</div>
            </div>
          </div>
          <div className="footer">
            <p>&copy; {new Date().getFullYear()} AP Creative Studio. All rights reserved.</p>
            <p style={{marginTop: '8px', color: '#52525b'}}>
              This message was sent from your website contact form
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}