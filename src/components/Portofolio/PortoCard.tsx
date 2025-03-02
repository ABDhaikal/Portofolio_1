import Image from "next/image";
import { useState } from "react";

interface CardProps {
   title: string;
   subtitle: string;
   img: string;
}
const PortofolioCard = () => {
   return (
    
      <div className=" bg-white relative p-[5%] flex-col gap-3  shadow-[-10px_10px_0px_0px_rgba(0,0,0,0.44)]  aspect-square ">
         <svg 
            viewBox="0 0 581 573"
            preserveAspectRatio="none"
            className=" w-[110%] h-[106%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg "
         >
            <path
               d="M23.0871 4C23.0871 63.7269 23.7235 87.7297 23.7235 151.249M23.7235 151.249C23.7235 214.768 23.6251 330.538 23.0871 408.348C22.5491 486.157 22.1316 561.893 22.1316 561.893C22.1316 572.883 20.9548 559.914 21.0406 554.066C21.1479 546.757 22.1775 338.787 22.1775 320.631C22.1775 302.476 23.0871 210.056 23.7235 151.249Z"
               stroke="black"
               strokeWidth="6.28125"
               strokeMiterlimit="10"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               d="M468.596 553.327C555.952 553.327 543.751 553.327 572.453 553.327C571.96 553.613 567.509 554.707 565.672 554.929C563.377 555.206 503.151 555.054 490.298 555.054C446.298 555.054 247.532 554.021 234.523 554.021M468.596 553.327C468.596 553.327 257.902 555.054 224.299 555.054C190.695 555.054 198.643 555.101 127.702 555.054C74.6648 555.02 11.2447 555.054 6.97693 555.054C2.70918 555.054 4.28393 552.983 4.28393 552.983C34.1152 554.021 86.0327 554.021 154.219 554.021C177.715 554.021 205.198 554.021 234.523 554.021M468.596 553.327C404.735 553.327 314.227 554.021 234.523 554.021"
               stroke="black"
               strokeWidth="6.28125"
               strokeMiterlimit="10"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               d="M557.218 287.36C557.218 356.866 558.635 400.598 558.635 446.044C558.635 491.491 557.911 568.483 557.911 568.483C557.911 568.483 556.245 571.727 556.245 565.387C556.245 559.047 557.335 513.975 557.218 449.201C557.101 384.426 557.106 316.551 557.218 287.36ZM557.218 287.36C557.218 254.594 556.461 187.664 556.506 150.42C556.556 108.657 556.506 48.5143 556.506 8.1875"
               stroke="black"
               strokeWidth="6.28125"
               strokeMiterlimit="10"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               d="M15.5156 18.5119C46.1049 18.5119 72.7934 18.5119 88.5292 18.5119M88.5292 18.5119C104.265 18.5119 174.131 18.8171 203.715 18.8171M88.5292 18.5119C88.5292 18.5119 122.653 17.5618 142.66 17.5618C162.667 17.5618 203.715 18.8171 203.715 18.8171M577.687 18.8171C546.379 18.8171 560.855 18.5119 529.758 18.5119C512.032 18.5119 490.348 19.0205 459.262 18.8171M286.985 17.5618C308.499 17.5912 420.945 18.5663 459.262 18.8171M286.985 17.5618C264.736 17.5314 233.298 18.8171 203.715 18.8171M286.985 17.5618C286.985 17.5618 340.93 17.5618 371.142 17.5618M459.262 18.8171C459.262 18.8171 401.355 17.5618 371.142 17.5618M203.715 18.8171C221.847 18.8171 263.887 18.8171 286.985 18.8171C310.084 18.8171 352.714 17.9802 371.142 17.5618"
               stroke="black"
               strokeWidth="6.28125"
               strokeMiterlimit="10"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>

         <div className="w-full h-[65%] border-4 border-black ">
            <Image
               src="/wow.png"
               alt=""
               width={500}
               height={500}
               className="w-full h-full object-cover"
            />
         </div>
         
         <div className=" justify-center  my-2 flex flex-row ">
            <div className="flex-col justify-start items-start gap-3 inline-flex grow">
               <div className="text-black text-2xl  md:text-4xl font-bold font-['Space Grotesk']">
                  Portfolio design
               </div>
               <div className=" text-black text-xl md:text-2xl font-medium font-['Space Grotesk']">
                  UI design - User research
                  webflow develop
               </div>
            </div>
            <div className=" text-black text-xl font-medium font-['Space Grotesk']">
               icon Here
            </div>
         </div>
      </div>
   );
};
export default PortofolioCard;

// interface ModalProps {
//    isOpen: boolean;
//    onClose: () => void;
//    img:string;
//    title:string
//    subtitle:string
//    description:string
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose ,img,title,subtitle,description}) => {
//    if (!isOpen) return null;

//    return (
//       <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//          <div className="bg-white p-4 rounded shadow-lg">
//             <h2 className="text-lg font-bold mb-4">Modal Title</h2>
//             <p className="mb-4">This is the modal content.</p>
//             <button
//                className="bg-blue-500 text-white px-4 py-2 rounded"
//                onClick={onClose}
//             >
//                Close
//             </button>
//          </div>
//       </div>
//    );
// };

// const Tombol: React.FC<ModalProps> = () => {
//    const [isModalOpen, setIsModalOpen] = useState(false);

//    const handleOpenModal = () => {
//       setIsModalOpen(true);
//    };

//    const handleCloseModal = () => {
//       setIsModalOpen(false);
//    };

//    return (
//       <div>
//          <button
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//             onClick={handleOpenModal}
//          >
//             Open Modal
//          </button>
//          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
//       </div>
//    );
// };
