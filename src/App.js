import React from 'react';
import {
  isMobile, isTablet, isDesktop, browserName, 
  osName, osVersion,  mobileModel, mobileVendor
} from 'react-device-detect';
import { Helmet } from 'react-helmet';

function App() {
  const deviceInfo = {
    "Device Type": isMobile ? "Mobile" : isTablet ? "Tablet" : isDesktop ? "Desktop" : "Unknown",
    "Browser Name": browserName,
    "OS Name": osName,
    "OS Version": osVersion,
    "Device Vendor": mobileVendor || "N/A",
    "Device Model": mobileModel || "N/A"
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-blue-200 flex items-center justify-center p-6">
      {/* Metadata */}
      <Helmet>
        <title>Know Your Device</title>
        <meta name="description" content="A simple app that displays detailed information about your device, including device type, OS, browser, and more." />
        <meta name="keywords" content="device information, browser info, device type, os, mobile, desktop, react-device-detect" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <meta property="og:title" content="Know Your Device" />
        <meta property="og:description" content="Get detailed device information like device type, OS, browser, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_to_your_image" />
        <meta property="og:url" content="URL_of_your_site" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Device Information App" />
        <meta name="twitter:description" content="A professional app to display device details." />
        <meta name="twitter:image" content="URL_to_your_image" />

      </Helmet>

      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
         Know Your Device
        </h1>
        <ul className="space-y-4">
          {Object.entries(deviceInfo).map(([key, value]) => (
            <li key={key} className="flex justify-between items-center bg-blue-100 p-4 rounded-md">
              <span className="font-semibold text-gray-700">{key}:</span>
              <span className="text-gray-600">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
