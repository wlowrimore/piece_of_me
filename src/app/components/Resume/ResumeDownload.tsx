"use client";

import { useState } from "react";

type ResumeDownloadProps = {
  downloadSuccess: boolean;
  handleDownload: () => void;
  parentNode: ParentNode | null;
};

const ResumeDownload: React.FC<ResumeDownloadProps> = () => {
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const [downloadFailure, setDownloadFailure] = useState<boolean>(false);

  const handleDownload = async () => {
    try {
      const response = await fetch("/resume/williamLowrimoreResume.pdf");
      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "williamLowrimoreResume.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode && link.parentNode.removeChild(link);

        setDownloadSuccess(true);
      } else {
        setDownloadFailure(true);
        throw new Error("Failed to download file.");
      }
    } catch (error) {
      console.error("Download error:", error);
      setDownloadSuccess(false);
    }
  };

  return (
    <>
      <div className="w-full text-lg text-zinc-950 font-bold text-center mt-12 py-2 px-6 bg-blue-300 rounded-3xl">
        <button onClick={handleDownload} type="button">
          Download Printable Resume
        </button>
      </div>
      {downloadSuccess && (
        <p className="absolute w-full z-10 top-96 right-0 py-3 bg-green-500 text-white text-xl tracking-wide text-center font-bold">
          Download Successful!
          <span
            onClick={(e) => setDownloadSuccess(false)}
            className="absolute right-1.5 top-1 px-[0.3rem] bg-white/70 rounded-full text-sm text-zinc-700"
          >
            X
          </span>
        </p>
      )}
      {downloadFailure && (
        <p className="absolute w-full z-10 top-96 right-0 py-3 bg-red-500 text-white text-xl tracking-wide text-center font-bold">
          Download Failed!
          <span
            onClick={(e) => setDownloadFailure(false)}
            className="absolute right-1.5 top-1 px-[0.3rem] bg-white/70 rounded-full text-sm text-zinc-700"
          >
            X
          </span>
        </p>
      )}
    </>
  );
};

export default ResumeDownload;
