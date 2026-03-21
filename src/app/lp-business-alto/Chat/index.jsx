"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Chat() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "5521997147642";
  const defaultMessage = "Olá! Quero saber mais sobre a landing de estratégia business.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-2.5 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#20bd5a]"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="hidden text-xs font-semibold text-white sm:block">WhatsApp</span>
        <svg
          className="fill-white"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 48 48"
        >
          <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path>
          <path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path>
          <path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.088-0.82c-0.297-0.013-0.637-0.012-0.977-0.012c-0.34,0-0.892,0.128-1.359,0.638c-0.467,0.51-1.784,1.744-1.784,4.253c0,2.509,1.826,4.933,2.08,5.274c0.255,0.34,3.526,5.654,8.705,7.694c4.303,1.696,5.179,1.358,6.111,1.273c0.934-0.085,3.016-1.233,3.441-2.424c0.425-1.19,0.425-2.211,0.297-2.424c-0.127-0.213-0.467-0.34-0.977-0.595c-0.51-0.255-3.016-1.488-3.484-1.658c-0.467-0.17-0.807-0.255-1.147,0.255c-0.34,0.51-1.317,1.658-1.614,1.998c-0.297,0.34-0.595,0.383-1.104,0.128c-0.51-0.255-2.15-0.793-4.096-2.53c-1.515-1.352-2.538-3.021-2.835-3.531c-0.297-0.51-0.032-0.785,0.223-1.04c0.229-0.229,0.51-0.595,0.765-0.892c0.255-0.297,0.34-0.51,0.51-0.85c0.17-0.34,0.085-0.638-0.043-0.893c-0.128-0.255-1.132-2.732-1.549-3.736z"
            clipRule="evenodd"
          ></path>
        </svg>
      </motion.a>
    </motion.div>
  );
}
