import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function VerificationPage() {
  const [userData, setUserData] = useState(null);
  const handleDownload = () => {
    const input = document.getElementById('verification-content');
    
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0); // Adjust positioning and size
      pdf.save('verification-details.pdf'); // Download the PDF
    });
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    setUserData(storedData);
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="verification-page">
      <h2>Verification Pass</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Room No:</strong> {userData.roomNo}</p>
      <p><strong>Verify Code:</strong> {userData.verifyCode}</p>

      <button onClick={handleDownload} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Download ID
      </button>
    </div>
  );
}

export default VerificationPage;
