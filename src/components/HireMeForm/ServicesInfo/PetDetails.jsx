function PetDetails({
  pet,
  index,
  onTypeChange,
  onOtherTypeChange,
  onNameChange,
  onAgeChange
}) {
  return (
    <div className="space-y-2">
      <label className="regular-text font-bold mr-4">
        Choose your pet:
        <select value={pet.type} onChange={(e) => onTypeChange(index, e.target.value)} className="border p-2 mb-3 border-pink-xtra-dark rounded-full border-2 bg-pink-light ml-4" required>
          <option value="">-- Select --</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Fish">Fish</option>
          <option value="Other">Other</option>
        </select>
      </label>

      {pet.type === 'Other' && (
        <div>
          <label className="regular-text font-bold mr-4">
            Enter other type:
            <input
              type="text"
              value={pet.other}
              onChange={(e) => onOtherTypeChange(index, e.target.value)}
              className="border p-2 mb-2 ml-4 border-pink-xtra-dark rounded-full border-2 bg-pink-light"
              required
            />
          </label>
        </div>
      )}

      <div>
        <label className="regular-text font-bold mr-4">
          What is your pet's name?
          <input
            type="text"
            value={pet.name}
            onChange={(e) => onNameChange(index, e.target.value)}
            className="border p-2 mb-2 ml-4 border-pink-xtra-dark rounded-full border-2 bg-pink-light"
            required
          />
        </label>
      </div>

      <div>
        <label className="regular-text font-bold mr-4">
          How old is your pet?
          <input
            type="text"
            value={pet.age}
            onChange={(e) => onAgeChange(index, e.target.value)}
            className="border p-2 mb-2 ml-4 border-pink-xtra-dark rounded-full border-2 bg-pink-light"
            required
          />
        </label>
      </div>
    </div>
  );
}

export default PetDetails;