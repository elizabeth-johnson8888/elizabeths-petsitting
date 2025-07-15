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
  const initialFormData = {
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
  }; 
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

  const [step, setStep] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [showTitle, setShowTitle] = useState(true);
  
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

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleToggleForm = () => {
    setShowForm(prev => !prev);
    setShowTitle(prev => !prev);
  }

  const handleMobileBackTitle = () => {
    setShowForm(false);
    setShowTitle(true);
  }

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
    fetch('https://petsitting-backend.onrender.com/busy-dates')
      .then((res) => res.json())
      .then((data) => {
        const calendarEntries = data.events;
        const parsedDates = disableDates(calendarEntries);
        
        setUnavailableDates(parsedDates);
      })
      .catch((error) => console.error('Error fetching busy dates:', error));

      const handleResize = () => {
        if (window.innerWidth >= 640) {
          // Tailwind's `sm` breakpoint is 640px
          setShowForm(true);
        } else {
          setShowForm(false);
        }
      };

      // Initial check
      handleResize();
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

    // alert("Your form has been submitted successfully! You'll receive an email confirming your petsitting request, and an additional form for more specific information. I look forward to meeting you!");
    // setFormData(initialFormData);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-16 sm:grid sm:grid-cols-[1fr_2fr] sm:grid-rows-1 sm:gap-8 ">
      {showTitle && (
      <div className='flex flex-col items-center justify-center'>
        <div className='border-line-left relative top-1 block sm:hidden'></div>
        <div className='flex flex-col center-items justify-center sm:relative sm:-left-20'>
          <h2 className="text-4xl font-bold text-center pb-2 sm:pb-8">Want to hire me?</h2>
          <p className='regular-text text-center sm:pb-8 hidden sm:block'> Fill out my form!</p>
        </div>

        <button className="w-48 button border-pink-xtra-dark rounded-full border-2 mt-5 sm:hidden" onClick={handleToggleForm}>
          Fill out my form!
        </button>
        <div className='border-line-right relative top-1 block sm:hidden'></div>
      </div>
      )}

      {showForm && ( 
        <div className='pl-5 pr-5 sm:p-0'>
          {/* // get client information */}
          { step === 1 && (
            <div>
              <h3 className="text-2xl font-bold pb-2 text-center">Your Information:</h3>
              <ClientName value={formData.owner_name} onChange={handleChange} />
              <PhoneNumber value={formData.phone} onChange={handleChange} />
              <Email value={formData.email} onChange={handleChange} />
              <Address value={formData.address} onChange={handleChange} />
              <div className='flex justify-between sm:justify-center'>
                <button type="button" onClick={handleMobileBackTitle} className='button border-pink-xtra-dark rounded-full border-2 sm:hidden'>Back</button>
                <button type="button" onClick={handleNext} className="button border-pink-xtra-dark rounded-full border-2">Next</button>
              </div>
            </div>
          )}

          {/* services serction */}
          { step === 2 && (
            <div className=''>
              <h3 className="text-2xl font-bold pb-2 text-center mb-4">Service Details:</h3>
              <ServicesSelector selectedServices={formData.services} onChange={handleServiceCheckboxChange} />

              <div className={`${formData.services.length > 1 ? 'h-56 max-w-xl overflow-y-scroll snap-none scrollable-area' : ''} px-2`}>
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
              </div>

              <div className="flex justify-between mt-2">
                <button type="button" onClick={handleBack} className='button border-pink-xtra-dark rounded-full border-2'>Back</button>
                <button type="button" onClick={handleNext} className='button border-pink-xtra-dark rounded-full border-2'>Next</button>
              </div>
            </div>
          )}

          { step === 3 && (
            <div>
              <h3 className="text-2xl font-bold pb-2 text-center mb-4">Service Details:</h3>
              <PetFormSection
                formData={formData}
                handleChange={handleChange}
                pets={pets}
                handlePetTypeChange={handlePetTypeChange}
                handleOtherTypeChange={handleOtherTypeChange}
                handlePetNameChange={handlePetNameChange}
                handlePetAgeChange={handlePetAgeChange}
              />
              <div className="flex justify-between mt-2">
                <button type="button" onClick={handleBack} className='button border-pink-xtra-dark rounded-full border-2'>Back</button>
                <button type="button" onClick={handleNext} className='button border-pink-xtra-dark rounded-full border-2'>Next</button>
              </div>
            </div>
          )}

          { step === 4 && (    
            <div>
              <div>
                <h3 className="text-2xl font-bold pb-2 text-center mb-4">Additional Information:</h3>
                <label className="regular-text font-bold mr-4">Any additional notes I should know?</label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value}))}
                  // rows={5}
                  className="border p-2 mb-4 w-full border-pink-xtra-dark rounded-full border-2 bg-pink-light"
                />
              </div>
              <div className="flex justify-between mt-2">
                <button type="button" onClick={handleBack} className="button border-pink-xtra-dark rounded-full border-2">Back</button>
                <button type="submit" className="button border-pink-xtra-dark rounded-full border-2">
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </form>
  );
}

export default HireMeForm;