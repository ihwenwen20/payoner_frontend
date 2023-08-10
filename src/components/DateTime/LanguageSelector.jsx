import React from 'react';

const LanguageSelector = ({ selectedLanguage, onChange }) => {
  return (
    <div>
      <label>Pilih Bahasa:</label>
      <select value={selectedLanguage} onChange={onChange}>
        <option value="en">English</option>
        <option value="id">Indonesian</option>
        {/* Tambahkan opsi untuk bahasa lain yang ingin Anda dukung */}
      </select>
    </div>
  );
};

export default LanguageSelector;
