import React from "react";
import { STATUS_MAPPER } from "../../pages/news-detail/constants";
import SliderWithCards from '../slider-with-cards'
import DocumentViewer from "../Image";
import "./style.scss";

const Document = (props) => {
  const {
    publicId,
    nin,
    number,
    type,
    status,
    openImageViewer,
    frontFileId,
    backFileId,
    setImages,
    index,
    handleModal,
    setCurrentImage,
    //validity,
    dateOfIssue,
    dateOfExpiry,
  } = props;

  if(type !== 'wallet-statement') {            
  
  return (
      <div className="card-body">
        <div className="timeline-body" >
          <div className="m-auto">
              <SliderWithCards>
                <div style={{display:"flex", justifyContent:"center"}}>
                <DocumentViewer
                  imageId={frontFileId}
                  setImages={setImages}
                  openImageViewer={openImageViewer}
                  index={index}
                  setCurrentImage={setCurrentImage}
                /></div>
                {backFileId && <DocumentViewer
                  imageId={backFileId}
                  setImages={setImages}
                  openImageViewer={openImageViewer}
                  index={index}
                  setCurrentImage={setCurrentImage}
                />}
                
              </SliderWithCards>
          </div>
          <div className="row" style={{textAlign: "left",marginLeft: "22px"}}>
          <div><br/>
            <div style={{display:"flex", justifyContent:"space-around", marginTop:"20px"}}>
            <div>
            <div className="mb-2"> <strong style={{paddingRight:"10px"}}>Document No. :</strong>  {number || 'N/A'}</div>
            <div className="mb-2"> <strong style={{paddingRight:"10px"}}>Document type : </strong>{type || "N/A"}</div>
            <div>
              <strong>
              Status:
              </strong>
           
            <span style={{marginLeft:"60px"}}
                className={`badge border ${STATUS_MAPPER[status]}  px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center w-80px`}>
                <i className="fa fa-circle fs-9px fa-fw me-1"></i> {status}
              </span>
            </div>
            </div>
            <div>
            <div className="mb-2"> <strong style={{paddingRight:"10px"}}>Date Of issue : </strong> {dateOfIssue || "N/A"}</div>
            <div className="mb-2"> <strong style={{paddingRight:"10px"}}>Date Of expiry : </strong> {dateOfExpiry || "N/A"}</div><br/>
            </div>
            </div>
            {status === "PENDING" && (
              <div className="mb-2 mt-4 d-flex justify-content-around">
                <button
                  type="submit"
                  className="btn btn-danger"
                  style={{width:"115px"}}
                  onClick={()=> handleModal('reject', publicId)}
                >
                  Reject
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  style={{width:"115px"}}
                  onClick={()=> handleModal('verify', publicId)}
                >
                  Approve
                </button>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
  );
            }
};

export default Document;