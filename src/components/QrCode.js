import React from "react";
import QRCode from "react-qr-code";

const QrCode = ({ url, maxWidth }) => {
  console.log(url);

  return (
    <div
      style={{ height: "auto", maxWidth, width: "100%", border: "1px solid", padding: "1px" }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={url}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default QrCode;
