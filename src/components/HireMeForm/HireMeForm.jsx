import { useEffect, useState } from 'react';
// import emailjs from '@emailjs/browser';

import ClientName from './ClientInfo/ClientName.jsx';
import PhoneNumber from './ClientInfo/PhoneNumber.jsx';
import Email from './ClientInfo/Email.jsx';
import Address from './ClientInfo/Address.jsx';
import ServicesSelector from './ServicesInfo/ServiceSelector.jsx';
import DropInDetails from './ServicesInfo/DropInDetails.jsx';
import HouseSitDetails from './ServicesInfo/HouseSitDetails.jsx';
import PetFormSection from './ServicesInfo/PetFormSection.jsx';

import { disableDates } from '../../util/calendar_api/DisableDates.js';
import { formatEmail } from '../../util/emailjs/formatEmails.js';
import { sendRequestEmail, sendClientEmail } from '../../util/emailjs/SendEmails.js';

// Form
// Get persons name, phone number, address
// Get number of pets, pet types, and names, age
// add captcha to form
function HireMeForm() {
  const [formData, setFormData] = useState({
    owner_name: '',
    phone: '',
    email: '',
    address: '',
    pets_num: '1',
    services: [],
    dropInDetails: {
      dates: '',
      visitsPerDay: '',
      times: ['']
    },
    walkDetails: {
      dates: '',
      walksPerDay: '',
      times: ['']
    },
    houseSitDetails: {
      dates: '',
      startTime: '',
      endTime: ''
    },
    additionalInfo: '',
  });

  const [unavailableDates, setUnavailableDates] = useState([]);
  
  const [pets, setPets] = useState([
    { type: '', other: '', name:'', age:''}
  ]);
  
  const handleServiceCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setFormData(prev => {
      const services = new Set(prev.services);
      if (checked) {
        services.add(value);
      } else {
        services.delete(value);
      }
      return { ...prev, services: Array.from(services) };
    });
  };

  const handlePetTypeChange = (index, value) => {
    const updated = [...pets];
    updated[index].type = value;
    if (value !== 'Other') {
      updated[index].other = '';
    }
    setPets(updated);
  };

  const handleOtherTypeChange = (index, value) => {
    const updated = [...pets];
    updated[index].other = value;
    setPets(updated);
  };

  const handlePetAgeChange = (index, value) => {
    const updated = [...pets];
    updated[index].age = value;
    setPets(updated);
  };

  const handlePetNameChange = (index, value) => {
    const updated = [...pets];
    updated[index].name = value;
    setPets(updated);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // If number of pets changes, adjust the pets array
    if (name === 'pets_num') {
      const num = parseInt(value);
      if (!isNaN(num) && num > 0) {
        const updatedPets = Array.from({ length: num }, (_, i) => pets[i] || { type: '', other: '' , name:'' , age:''});
        setPets(updatedPets);
      }
    }
  };

  // Fetch busy dates from your backend
  useEffect(() => {
    fetch('https://petsitting-backend.onrender.com/busy-dates') // Replace with your actual backend URL
      .then((res) => res.json())
      .then((data) => {
        const calendarEntries = data.events;
        const parsedDates = disableDates(calendarEntries);
        
        setUnavailableDates(parsedDates);
      })
      .catch((error) => console.error('Error fetching busy dates:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const petList = pets.map((p, x=1) => ({
      num: x + 1,
      type: p.type === 'Other' ? p.other : p.type,
      name: p.name,
      age: p.age
    }));

    const templateParams = formatEmail(formData, petList);
    sendRequestEmail(templateParams);
    sendClientEmail(templateParams);
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg space-y-4">
      <h2 className="text-xl font-bold">Want to hire me? Fill out my form!</h2>

      {/* // get client information */}
      <ClientName value={formData.owner_name} onChange={handleChange} />
      <PhoneNumber value={formData.phone} onChange={handleChange} />
      <Email value={formData.email} onChange={handleChange} />
      <Address value={formData.address} onChange={handleChange} />

      {/* services serction */}
      <ServicesSelector selectedServices={formData.services} onChange={handleServiceCheckboxChange} />

      {formData.services.includes('Drop-in') && (
        <DropInDetails
            label="Drop-In"
            dateLabel="Drop-in Dates: "
            timeLabel="Drop-in Times: "
            data={formData.dropInDetails}
            setData={(update) => setFormData((prev) => ({ ...prev, dropInDetails: update }))}
            unavailableDates={unavailableDates}
        />
      )}

      {formData.services.includes('Walk') && (
        <DropInDetails
            label="Walk"
            dateLabel="Walk Dates: "
            timeLabel="Walk Times: "
            data={formData.walkDetails}
            setData={(update) => setFormData(prev => ({ ...prev, walkDetails: update }))}
            unavailableDates={unavailableDates}
        />
      )}

      {formData.services.includes("House-sit") && (
        <HouseSitDetails
          label="House-Sit"
          dateLabel="Houses-sit Dates: "
          data={formData.houseSitDetails}
          setData={(update) => setFormData(prev => ({...prev, houseSitDetails: update}))}
          unavailableDates={unavailableDates}
        />
      )}

      <PetFormSection
        formData={formData}
        handleChange={handleChange}
        pets={pets}
        handlePetTypeChange={handlePetTypeChange}
        handleOtherTypeChange={handleOtherTypeChange}
        handlePetNameChange={handlePetNameChange}
        handlePetAgeChange={handlePetAgeChange}
      />
           
      <div>
        <label>Any additional notes I should know?</label>
        <textarea
          value={formData.additionalInfo}
          onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value}))}
          rows={5}
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}

export default HireMeForm;