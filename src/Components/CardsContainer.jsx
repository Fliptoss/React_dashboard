import React from 'react';
import AcmePlusCard from './AcmePlusCard';
import AcmeAdvancedCard from './AcmeAdvancedCard';
import AcmeProfessionalCard from './AcmeProfessionalCard';


const CardsContainer = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <AcmePlusCard />
      <AcmeAdvancedCard />
      <AcmeProfessionalCard />

    </div>
  );
};

export default CardsContainer;
