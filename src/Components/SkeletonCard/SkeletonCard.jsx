import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SkeletonCard = () => {
  const cardRef = useRef(null);
  const shimmerRef = useRef(null);

  useEffect(() => {
    // GSAP shimmer animation
    const shimmer = shimmerRef.current;
    if (shimmer) {
      gsap.set(shimmer, { x: "-100%" });
      gsap.to(shimmer, {
        x: "100%",
        duration: 1.5,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 0.5
      });
    }

    // Card entrance animation
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div 
      ref={cardRef}
      className="card bg-base-100 shadow rounded-xl p-4 relative overflow-hidden"
    >
      {/* Shimmer overlay */}
      <div 
        ref={shimmerRef}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
        style={{ transform: "translateX(-100%)" }}
      />
      
      <div className="h-44 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      </div>
      
      <div className="mt-4 space-y-3">
        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
        </div>
        <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
        </div>
        <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
        </div>
        <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded mt-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
