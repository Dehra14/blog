import html2canvas from "html2canvas";
import { useEffect } from "react";
import styles from './Screenshotbtn.module.css';

export default function ScreenshotButton() {
  const captureScreenshot = () => {
    html2canvas(document.body).then((canvas) => {
      const link = document.createElement("a");
      link.download = "blog-screenshot.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  useEffect(() => {
    const handleVoiceCommand = (e) => {
      if (e.results[0][0].transcript.toLowerCase().includes("screenshot")) {
        captureScreenshot();
      }
    };

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = handleVoiceCommand;
    recognition.start();

    return () => recognition.stop();
  }, []);

   return (
    <button onClick={captureScreenshot} className={styles.screenshotBtn}>
      📸 Screenshot
    </button>
  );
}