const getYearLabelOffset = (itemRefs, projects, activeProjectId, trackRef) => {
    const activeEl = itemRefs.current[activeProjectId];
    const trackEl = trackRef.current;
  
    if (activeEl && trackEl) {
      const trackRect = trackEl.getBoundingClientRect();
      const elementRect = activeEl.getBoundingClientRect();
  
      const rawOffset = elementRect.top - trackRect.top;
  
      // Clamp offset so label stays inside track
      const labelHeight = 40;
      const maxOffset = trackRect.height - labelHeight;
      const clampedOffset = Math.max(0, Math.min(rawOffset, maxOffset));
  
      return clampedOffset;
    }
  
    return 0;
  };
  
  export default getYearLabelOffset;
  