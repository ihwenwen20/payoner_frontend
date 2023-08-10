import React from 'react';

const TimeZoneSelector = ({ selectedTimeZone, onChange }) => {
  return (
    <div>
      <label>Pilih Zona Waktu:</label>
      <select value={selectedTimeZone} onChange={onChange}>
        <option value="UTC">UTC</option>
        <option value="Asia/Jakarta">Asia/Jakarta</option>
        {/* Tambahkan opsi untuk zona waktu lain yang ingin Anda dukung */}
      </select>
    </div>
  );
};

export default TimeZoneSelector;
