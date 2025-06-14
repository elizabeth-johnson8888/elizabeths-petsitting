export function formatEmail( formData, petList ) {
    // create pet info string for email to me
    const formattedPets = petList.map(p => (
      `Pet ${p.num} is a ${p.age} year old ${p.type} named ${p.name}!`
    )).join('\n');

    let formattedDates = '';

    let formattedServices = "";
    for (const service of formData.services) {
      if (service === 'Drop-in') {
        formattedDates = formData.dropInDetails.dates?.map(date => date.toLocaleDateString('en-US')).join('-');
        formattedServices = formattedServices + "~Drop-in Details~\nDrop-in Dates: " + formattedDates + "\nVisits per Day: " + formData.dropInDetails.visitsPerDay + "\n";
        formattedServices = formattedServices + formData.dropInDetails.times.map((t, i=0) => `Approximate Time ${i + 1}: ${t}`).join('\n') + "\n\n";
      }
      else if (service === 'Walk') {
        formattedDates = formData.walkDetails.dates?.map(date => date.toLocaleDateString('en-US')).join('-');
        formattedServices = formattedServices + "~Walk Details~\nWalk Dates: " + formattedDates + "\nWalks per Day: " + formData.walkDetails.walksPerDay + "\n";
        formattedServices = formattedServices + formData.walkDetails.times.map((t, i) => `Approximate Time ${i + 1}: ${t}`).join('\n') + "\n\n";
      }
      else {
        formattedDates = formData.houseSitDetails.dates?.map(date => date.toLocaleDateString('en-US')).join('-');
        formattedServices = formattedServices + "~House-sit Details~\nHouse-sit Dates: " + formattedDates + "\nApproximate Start: " + formData.houseSitDetails.startTime + "\nApproximate End: " + formData.houseSitDetails.endTime + "\n\n"
      }
    }

    // emailjs template params
    const templateParams = {
      owner_name: formData.owner_name,
      phone: formData.phone,
      email: formData.email,
      services: formData.services.join(', '),
      address: formData.address,
      pets_num: formData.pets_num,
      pets_info: formattedPets,
      services_info: formattedServices,
      additional_info: formData.additionalInfo
    };

    return templateParams;
}