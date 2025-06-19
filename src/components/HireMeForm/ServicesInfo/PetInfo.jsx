function PetsCountInput({ value, onChange }) {
  return (
    <div>
      <label className="regular-text font-bold mr-4">Number of Pets:</label>
      <input
        type="text"
        name="pets_num"
        value={value}
        onChange={onChange}
        min="1"
        required
        className="border p-2 mb-3 border-pink-xtra-dark rounded-full border-2 bg-pink-light"
      />
    </div>
  );
}

export default PetsCountInput;