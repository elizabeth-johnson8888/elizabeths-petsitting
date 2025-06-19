function ServicesSelector ({ selectedServices, onChange }) {
    const services = ['Drop-in', 'Walk', 'House-sit'];

    return (
        <div className="flex flex-col items-center mb-4">
            {/* <label className="regular-text font-bold mb-2">What service(s) would you like me to provide?</label> */}
            <div>
            {services.map(service => (
                <label key={service} className="regular-text font-bold mr-2 sm:mr-4 sm:ml-4">
                    <input
                        type="checkbox"
                        id="custom-textbox"
                        value={service}
                        checked={selectedServices.includes(service)}
                        onChange={onChange}
                        className="w-5 h-5 appearance-none mr-1 sm:mr-4 rounded border border-pink-xtra-dark border-2 bg-pink-light checked:bg-pink-600"
                        // checked:bg-pink-600
                    />
                    
                    <span>{service}</span>
                </label>
            ))}
            </div>
        </div>
    );

}

export default ServicesSelector;


{/* <div class="inline-flex items-center">
  <label class="flex items-center cursor-pointer relative">
    <input checked type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-custom-icon" />
    <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5 h-3.5">
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
      </svg>
    </span>
  </label>
</div> */}