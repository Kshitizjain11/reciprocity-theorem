import React, { useEffect, useRef } from 'react';

const MeterGauge = ({ value = 0, id = 'meter' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw meter background circle
    ctx.fillStyle = '#f0f0f0';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 45, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw scale marks and numbers
    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const angles = [-3, -1, 1, 3];
    const positions = [
      { angle: Math.PI + Math.PI / 6, label: '-3' },
      { angle: Math.PI + Math.PI / 8, label: '-1' },
      { angle: Math.PI / 8, label: '1' },
      { angle: Math.PI / 6, label: '3' },
    ];

    positions.forEach((pos) => {
      const x = centerX + 50 * Math.cos(pos.angle);
      const y = centerY + 50 * Math.sin(pos.angle);
      ctx.fillText(pos.label, x, y);
    });

    // Draw needle
    const maxValue = 3;
    const normalizedValue = Math.max(-3, Math.min(3, value));
    const needleAngle = Math.PI + (Math.PI / 6) - (normalizedValue / maxValue) * (Math.PI / 3);

    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
      centerX + 35 * Math.cos(needleAngle),
      centerY + 35 * Math.sin(needleAngle)
    );
    ctx.stroke();

    // Draw center dot
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
    ctx.fill();
  }, [value]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <canvas
        ref={canvasRef}
        width={120}
        height={100}
        style={{ border: '1px solid #ddd', borderRadius: '4px' }}
      />
    </div>
  );
};

export default MeterGauge;
