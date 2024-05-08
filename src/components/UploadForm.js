'use client';
import UploadIcon from "@/components/UploadIcon";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadForm() {
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  async function upload(ev) {
    ev.preventDefault();
    const files = ev.target.files;
    if (files.length > 0) {
      const file = files[0];
      setIsUploading(true);
      try {
        const res = await axios.postForm('/api/upload', {
          file,
        });
        const newName = res.data.newName;
        router.push('/' + newName);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsUploading(false);
      }
    }
  }

  return (
    <>
      {isUploading && (
        <div className="bg-black/90  text-white fixed inset-0 flex items-center backdrop-blur-sm">
          <div className="w-full text-center">
            <h2 className="text-4xl mb-4">Uploading</h2>
            <h3 className="text-xl">Please wait...</h3>
          </div>
        </div>
      )}

      {!isUploading && (
        <label className="bg-white/20 transform active:scale-x-75 p-1 rounded-full py-2 px-6 inline-flex gap-2 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition duration-200">
          <UploadIcon />
          <span>Choose file</span>
          <input onChange={upload} type="file" className="hidden" />
        </label>
      )}
    </>
  );
}
