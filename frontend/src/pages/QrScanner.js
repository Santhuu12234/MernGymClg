// src/pages/QrScanner.js
import React, { useEffect, useRef, useState } from 'react';
import jsQR from 'jsqr';
import './QrScanner.css'; // linked CSS

const QrScanner = ({ darkMode }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const [scannedUrl, setScannedUrl] = useState('');
  const [cameraReady, setCameraReady] = useState(false);

  // 📸 Function to initialize camera
  const initCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          zoom: true,         // optional zoom
          focusMode: 'continuous', // optional autofocus
        },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute('playsinline', true);
        await videoRef.current.play();
        streamRef.current = stream;
        setCameraReady(true);
      }
    } catch (err) {
      console.error('Camera error:', err);
    }
  };

  // 📸 Initial camera setup
  useEffect(() => {
    initCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // 🔁 Manage camera based on scanned state and page unmount
  useEffect(() => {
    const stopCamera = () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    };

    if (!scannedUrl) {
      setCameraReady(false);
      initCamera();
    } else {
      stopCamera(); // Stop when QR is scanned and iframe is shown
    }

    return () => {
      stopCamera(); // Also stop if user navigates away from scanner page
    };
  }, [scannedUrl]);

  // 🔍 Scan QR continuously
  useEffect(() => {
    if (!cameraReady || scannedUrl) return;

    const scan = () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (!video || !canvas || video.videoWidth === 0 || video.videoHeight === 0) {
        requestAnimationFrame(scan);
        return;
      }

      const context = canvas.getContext('2d');
      if (!context) return;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, canvas.width, canvas.height);

      if (code) {
        setScannedUrl(code.data);
      } else {
        requestAnimationFrame(scan);
      }
    };

    requestAnimationFrame(scan);
  }, [cameraReady, scannedUrl]);

  // ⬅️ Listen for back navigation event from NavBar
  useEffect(() => {
    const handleCustomBack = () => {
      setScannedUrl('');
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    };

    window.addEventListener('goBackToScanner', handleCustomBack);
    return () => {
      window.removeEventListener('goBackToScanner', handleCustomBack);
    };
  }, []);

  return (
    <div className={`qrscanner-container ${darkMode ? 'dark' : 'light'}`}>

      {/* Info Text */}
      {!scannedUrl && (
        <><h1 style={{ fontFamily: "'Trade Winds', cursive", textAlign: "center",fontSize:"40px" }}>Scan Equipment</h1>
          <h2 className="qrscanner-heading" style={{fontWeight:600}}>
            Align QR Code Inside The Box To Scan
          </h2>
          <div className="qrscanner-video-wrapper">
            <video ref={videoRef} className="qrscanner-video" />
            <canvas ref={canvasRef} style={{ display: 'none' }} />
          </div>
        </>
      )}

      {/* Iframe View */}
      {scannedUrl && (
        <iframe
          src={scannedUrl}
          title="Scanned Website"
          className="qrscanner-iframe"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      )}
    </div>
  );
};

export default QrScanner;
