import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Document, Page, pdfjs } from "react-pdf";

import HttpHelper from "../../utils/http-helper";
import {
  getFileUrl,
} from "../../pages/news-detail/constants";
import "./style.scss";

const { getRequest } = new HttpHelper();

function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

const DocumentViewer = (props) => {
  const {
    imageId,
    src,
    openImageViewer,
    closeImageViewer,
    setImages,
    index,
    setCurrentImage,
  } = props;

  if (imageId) {
    const { data, isLoading, isError } = useQuery({
      queryKey: [imageId + index+1],
      queryFn: async () => {
        const { data, headers } = await getRequest({
          url: getFileUrl(imageId),
          headers: {
            "cache-control": "no-cache",
          },
          responseType: "arraybuffer",
        });

        let docType = headers["file-name"].split(".");
        docType = docType[docType.length - 1];
        const encodedDoc = arrayBufferToBase64(data);

        return { docType, encodedDoc };
      },
    });
    
    if (isLoading) {
      return (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      );
    }

    if (isError) {
      return <p>Error loading image</p>;
    }

    if (data.docType !== "pdf") {
      const img = "data:image/jpeg;base64," + data.encodedDoc;
      return (
        <img style={{display:"flex", justifyContent:"center"}}
          className="w-400px h-300px cursor-pointer"
          src={img}
          onClick={() => {
              openImageViewer(index);
              setImages([img])
            }
          }
        />
      );
    }

    return (
      <div>
        {data ? (
          <div>
            <a target="_blank"  href='https://finmapp-cdn.s3.ap-south-1.amazonaws.com/wallet-statement.pdf'>
              <button className="btn border">
                Preview pdf
              </button>
            </a>
          </div>
        ) : (
          <div className="w-300px h-150px cursor-pointer">PDF</div>
        )}
      </div>
    );
  }

  return (
    <img
      className="w-300px h-150px cursor-pointer"
      src={src}
      onClick={() => openImageViewer(index)}
    />
  );
};

export default DocumentViewer;
