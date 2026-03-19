"use client";

import React, { useEffect, useRef, useState } from "react";

// Hook de contagem animada
function useCountUp(target, duration = 2500) { // Duração de 2.5 segundos
  const [count, setCount] = useState(0);
  const frameRef = useRef();

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const ratio = Math.min(progress / duration, 1);
      
      const currentCount = ratio * target;
      setCount(currentCount);

      if (progress < duration) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setCount(target); // Garante que o valor final seja exato
      }
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration]);

  return count;
}

export const AnimatedNumber = ({ target }) => {
    const count = useCountUp(target);

    // Decimal apenas no final
    const isFinished = count >= target;

    if (isFinished) {
      // Mostra o número completo e formatado
      return <span>{target.toLocaleString('pt-BR', {
          minimumFractionDigits: Number.isInteger(target) ? 0 : 1,
          maximumFractionDigits: 1,
      })}</span>;
    }

    // Mostra somente o número inteiro
    return <span>{Math.floor(count).toLocaleString('pt-BR')}</span>;
}
