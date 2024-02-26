import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Aboutus(){
  return (
    <>
      <Navbar/>
      
      <div className="flex flex-col justify-center items-center pb-40 pt-20">
      <div className="bg-[#222847]/65 w-3/5 h-4/5 text-center rounded-3xl p-16">
        <h1 className="text-[#F4EBDB] text-3xl font-bold">ABOUT US</h1>
        <h4 className="text-[#B6BBC4] pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h4>
      </div>
      </div>

      <Footer/>
    </>
  )
}


// const SocialMediaIcon = ({ src, alt }) => (
//   <img loading="lazy" src={src} alt={alt} className="my-auto w-11 aspect-square" />
// );

// const AboutSection = () => (
//   <section className="flex justify-center items-center px-16 py-12 text-center bg-slate-800 rounded-[50px]">
//     <div className="mt-9 mb-11 w-full max-w-[872px]">
//       <h2 className="text-5xl font-bold text-stone-200">ABOUT US</h2>
//       <p className="mt-20 text-3xl font-light text-gray-400">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//       </p>
//     </div>
//   </section>
// );

// const ContactSection = () => (
//   <div className="flex flex-col text-center">
//     <h3 className="text-3xl font-bold text-stone-200">Contact us</h3>
//     <p className="mt-8 text-xl text-gray-400">
//       Email: hssdug@pict.edu <br />
//       Phone: 6552286649
//     </p>
//   </div>
// );

// function HomePage() {
//   const socialMediaIcons = [
//     { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5acc3cd4c5246e708a61e18f182c2313125e9b65771397246aa6ac9d162dadcf", alt: "Facebook" },
//     { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f423660bb067d6d012c8a1e227d5949d931f97f22a3cddaec33bbfc6ebd7cdf7", alt: "Twitter" },
//     { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e39c8adfbb2b892c8ffbae5e6a2b806310bdaf180b45612bf9150d328694a026", alt: "Instagram" },
//     { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aec8f3a31d7ffe797e99b7941b811c47b52ed98da1b99a2f45307a905343efbb", alt: "LinkedIn" },
//   ];

//   return (
//     <main className="bg-white">
//       <div className="px-16 py-12 min-h-[1024px] overflow-hidden relative flex flex-col justify-center items-center max-w-full">
//         <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/009db6db26bcc5867f611bc88743eb057c8b583d9aab905af0d82b453724ea87?apiKey=b02cc572921c4af9aa27e716f49134e4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/009db6db26bcc5867f611bc88743eb057c8b583d9aab905af0d82b453724ea87?apiKey=b02cc572921c4af9aa27e716f49134e4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/009db6db26bcc5867f611bc88743eb057c8b583d9aab905af0d82b453724ea87?apiKey=b02cc572921c4af9aa27e716f49134e4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/009db6db26bcc5867f611bc88743eb057c8b583d9aab905af0d82b453724ea87?apiKey=b02cc572921c4af9aa27e716f49134e4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/009db6db26bcc5867f611bc88743eb057c8b583d9aab905af0d82b453724ea87?apiKey=b02cc572921c4af9aa27e716f49134e4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/009db6db26bcc5867f611bc88743eb057c8b583d9aab905af0d82b453724ea87?apiKey=b02cc572921c4af9aa27e716f49134e4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/009db6db26bcc5867f611bc88743eb057c8b583d9aab905af0d82b453724ea87?apiKey=b02cc572921c4af9aa27e716f49134e4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/009db6db26bcc5867f611bc88743eb057c8b583d9aab905af0d82b453724ea87?apiKey=b02cc572921c4af9aa27e716f49134e4&"className="object-cover absolute inset-0 w-full h-full" alt="" />
//         <div className="relative mt-20 mb-9 w-full max-w-[1166px]">
//           <AboutSection />
//           <div className="flex gap-5 justify-between items-start mt-24 w-full max-w-[817px] flex-wrap">
//             <ContactSection />
//             <div className="flex flex-col">
//               <h3 className="text-3xl font-bold text-stone-200">Follow us</h3>
//               <div className="flex gap-5 justify-between items-start mt-7">
//                 {socialMediaIcons.map(icon => (
//                   <SocialMediaIcon key={icon.src} src={icon.src} alt={icon.alt} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }