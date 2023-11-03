import React,{useState , useRef} from 'react'
import verifiedImage from '../assets/images/quality.png';
import signature from '../assets/images/sign.png';
import {Navbar,Footer} from './';
import html2canvas,{simulateDownloadImageClick} from 'html2canvas';
import jspdf, { jsPDF } from 'jspdf';


const Create = () => {
    
    const [name,setName] = useState('Your name');
    const [courseName,setCourseName] = useState('Course Name');
    const [hodName,setHodName] = useState('Depart of cse');
    const [collgName,setCollgName] = useState('College Name');

    const certificateRef = useRef(null);

    const handleDownloadPDF = ( ) => {
        //use html2canvas to capture a screenshot of the certificate element
        html2canvas(certificateRef.current).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            // html2canvas.simulateDownloadImageClick(imgData, `${name}_certificate.png`);

            const pdf = new jsPDF('l','mm',[1200,740])
            pdf.addImage(imgData,'PNG',0,0,1200,740);

            pdf.save(`${name}_certificate`);
            
        })
    }
    
    const handleDownloadPNG = ( ) => {
        //use html2canvas to capture a screenshot of the certificate element
        html2canvas(certificateRef.current).then(canvas => {
            // const imgData = canvas.toDataURL('image/png');
            // simulateDownloadImageClick(imgData, `${name}_certificate.png`);
            const link = document.createElement('a');
            link.download = `${name}_certificate.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();

        })
    }

  return (
    <div className={'min-h-screen gradient-bg-common'}>
        <Navbar />
        <div className=' text-white text-lg flex md:flex-row flex-col justify-center items-center w-full '>

            {/* Preview of the Certificate */}
            <div className='md:w-[60%] w-[90%] white-glassmorphism flex justify-center m-2 '>
                <div  className='w-full m-3 p-2 bg-white text-black rounded-sm ' ref={certificateRef}>

                    <div className='border-[4px] border-black m-2 font-medium bg-[#d9d9d9] text-black rounded-sm drop-shadow-2xl '>
                        <div className=' text-4xl text-center mt-7 uppercase tracking-[14px]'>CERTIFICATE</div>
                        <div className=' text-2xl text-center mt-2 uppercase tracking-wide'>OF COMPLETION</div>
                        <div className=' text-xl text-center mt-5 tracking-wide '>The certificate is awarded to </div>
                        <div className=' text-2xl text-center my-2 font-mono text-orange-400 uppercase tracking-wide '>{name}</div>
                        <div className=' bg-black mx-auto w-[50%] h-[2px] my-1 rounded-3xl'></div>
                        <div className=' text-lg text-center my-4 tracking-wide'>In recognition for a record of Outstanding accomplishments of <div className=' text-orange-600'>{courseName}</div> </div>
                        
                        <div className='flex flex-row w-full mb-4 tracking-wide'>
                            <div className='flex flex-col justify-center items-center w-[50%]'>
                            <div className=' text-lg m-1 text-center'>
                                  <img src={signature} alt="signature" width={"150"} height={"150"} />
                                </div>
                                <div className=' text-lg font-bold text-center'>{hodName}</div>
                            </div>

                            <div className='flex  justify-center items-center w-[50%]'>
                                <div className=' text-lg  w-[150px] h-[150px] text-center'>
                                    <img src={verifiedImage} alt="Icon of the verified" />
                                </div>
                            </div>

                            <div className='flex flex-col justify-center items-center w-[50%]'>
                                <div className=' text-lg m-1 text-center'>
                                  <img src={signature} alt="signature" width={"150"} height={"150"} />
                                </div>
                                <div className=' text-lg font-bold text-center'>{collgName}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Input fields of the certificate */}
            <div className='md:w-[30%] w-[90%] white-glassmorphism m-2'>
                            <div className='flex flex-col p-2'>
                                  <label class="text-sm font-bold text-white tracking-wide m-1">Name</label>
                                  <input class="text-base text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 w-[90%] m-1" type="text" placeholder="Enter the your Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className='flex flex-col p-2'>
                                  <label class="text-sm font-bold text-white tracking-wide m-1">Course Name</label>
                                  <input class="text-base text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 w-[90%] m-1" type="text" placeholder="Enter the your Course Name" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
                            </div>

                            <div className='flex flex-col p-2'>
                                  <label class="text-sm font-bold text-white tracking-wide m-1">Department Head</label>
                                  <input class="text-base text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 w-[90%] m-1" type="text" placeholder="Enter the Roll No" value={hodName} onChange={(e) => setHodName(e.target.value)} />
                            </div>

                            <div className='flex flex-col p-2'>
                                  <label className="text-sm font-bold text-white tracking-wide m-1">Signature Of head</label>
                                  <input className="text-base text-black bg-white p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 w-[90%] m-1" type="file"  />
                            </div>

                            <div className='flex flex-col p-2'>
                                  <label className="text-sm font-bold text-white tracking-wide m-1">College Name</label>
                                  <input className="text-base text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 w-[90%] m-1" type="text" placeholder="Enter the Department (Eg:CSE)" value={collgName} onChange={(e) => setCollgName(e.target.value)} />
                            </div>

                            <div className='flex flex-col p-2'>
                                  <label className="text-sm font-bold text-white tracking-wide m-1">Signature Of College</label>
                                  <input className="text-base text-black bg-white p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 w-[90%] m-1" type="file"  />
                            </div>

                            <div className='flex flex-row'>
                               {/* Download PDF */}
                            <button
                                type="button"
                                className="mx-4 mt-2 flex flex-row justify-center items-center my-1 bg-[#2952e3] p-2 rounded-xl cursor-pointer hover:bg-[#2546bd]"
                                onClick={handleDownloadPDF}
                              >
                                <p className="text-white text-lg font-semibold">
                                  Download PDF
                                </p>
                              </button>
                              
                              {/* Download PNG */}
                              <button
                                type="button"
                                className="mx-4 mt-2 flex flex-row justify-center items-center my-1 bg-[#2952e3] p-2 rounded-xl cursor-pointer hover:bg-[#2546bd]"
                                onClick={handleDownloadPNG}
                              >
                                <p className="text-white text-lg font-semibold">
                                  Download Image
                                </p>
                              </button>

                            </div>

                           
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Create;