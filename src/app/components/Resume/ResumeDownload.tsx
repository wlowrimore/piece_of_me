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
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const handleDownload = async () => {
    setIsDownloading(true);
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
      setDownloadFailure(true);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={handleDownload}
          type="button"
          disabled={isDownloading}
          className="bg-blue-400 md:text-xl 2xl:text-2xl text-zinc-900/80 tracking-wider font-semibold w-full md:w-[79%] lg:w-[59%] xl:w-[63%] 2xl:w-[42.4%] 2xl:mx-44 rounded-lg py-2 px-12 mt-12 hover:bg-blue-300 hover:text-zinc-900 transition duration-300"
        >
          {isDownloading ? "Downloading..." : "Download Printable Resume"}
        </button>
      </div>
      {downloadSuccess && (
        <p className="absolute bottom-[17%] left-[24%] md:bottom-[24%] md:left-[36%] lg:bottom-[-4.5%] lg:left-[40%] 2xl:bottom-[10.3%] 2xl:left-[45.5%] text-green-500 md:text-xl tracking-wider">
          Download Successful!
          <span
            onClick={(e) => setDownloadSuccess(false)}
            className="absolute 2xl:bottom-[8.3%] right-[-12%] 2xl:right-[-20%] hover:text-red-500 cursor-pointer"
          >
            X
          </span>
        </p>
      )}
      {downloadFailure && (
        <p className="absolute bottom-[17%] left-[24%] md:bottom-[24%] md:left-[36%] lg:bottom-[-4.5%] lg:left-[40%] 2xl:bottom-[8.3%] 2xl:left-[45.5%] text-red-500 md:text-xl tracking-wider">
          Download Failed!
          <span
            onClick={(e) => setDownloadFailure(false)}
            className="absolute 2xl:bottom-[8.3%] right-[-12%] 2xl:right-[-20%] hover:text-white cursor-pointer"
          >
            X
          </span>
        </p>
      )}
    </>
  );
};

export default ResumeDownload;
