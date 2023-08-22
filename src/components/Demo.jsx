import React from 'react'

import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';


// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

const Demo = () => {
  return (
            <div  className={"flex flex-col justify-center items-center gradient-bg-welcome "}>
                {/* <PDFViewer
                    document={{
                        url: 'https://ipfs.moralis.io:2053/ipfs/QmPc5KBDmBbHD8ez2ThEsU9Q9WW8gYvjGT63Nt6NyN5UdN/resume',
                    }}
                /> */}
                
                {/* <FileViewer
                fileType={"pdf"}
                filePath={'https://ipfs.moralis.io:2053/ipfs/QmPc5KBDmBbHD8ez2ThEsU9Q9WW8gYvjGT63Nt6NyN5UdN/resume'}
                />
              
                <FileViewer
                fileType={"png"}
                filePath={'https://ipfs.moralis.io:2053/ipfs/QmRAb7w2PAKjSzYdwW7xTLvdTqxQ277BP1QYsYCraU1ULL/bmc.png'}
                ></FileViewer> */}
                <div className={" border-[2px] shadow-lg h-[500px] w-[60%]"}>

                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                          <Viewer fileUrl="https://ipfs.moralis.io:2053/ipfs/QmPc5KBDmBbHD8ez2ThEsU9Q9WW8gYvjGT63Nt6NyN5UdN/resume" />
                </Worker>
                </div>
                <div class="flex justify-center mt-8">
                    <div class="max-w-2xl rounded-lg shadow-xl white-glassmorphism">
                        <div class="m-4">
                            <label class="inline-block mb-2 text-gray-500">File Upload</label>
                            <div class="flex items-center justify-center w-full">
                                <label
                                    class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-slate-500 hover:border-gray-300">
                                    <div class="flex flex-col items-center justify-center pt-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-black"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <p class="pt-1 text-sm tracking-wider text-black group-hover:text-gray-600">
                                            Attach a file</p>
                                    </div>
                                    <input type="file" class="opacity-0" />
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-center p-2">
                            <button class="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl">Upload</button>
                        </div>
                    </div>
                </div> 
          
            </div>
  )
}

export default Demo;