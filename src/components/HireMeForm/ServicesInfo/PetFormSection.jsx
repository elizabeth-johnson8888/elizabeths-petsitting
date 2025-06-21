import PetsCountInput from './PetInfo.jsx';
import PetDetails from './PetDetails.jsx';

function PetFormSection({ formData, handleChange, pets, handlePetTypeChange, handleOtherTypeChange, handlePetNameChange, handlePetAgeChange }) {
  return (
    <div className='flex flex-col items-center text-center'>
      <PetsCountInput value={formData.pets_num} onChange={handleChange} />

      <div className={`${formData.pets_num > 1 ? 'h-56 w-full max-w-xl overflow-y-scroll snap-none scrollable-area' : ''} px-2`}>
        {pets.map((pet, index) => (
          <PetDetails
            key={index}
            pet={pet}
            index={index}
            onTypeChange={handlePetTypeChange}
            onOtherTypeChange={handleOtherTypeChange}
            onNameChange={handlePetNameChange}
            onAgeChange={handlePetAgeChange}
          />
        ))}
      </div>
    </div>
  );
}

export default PetFormSection;