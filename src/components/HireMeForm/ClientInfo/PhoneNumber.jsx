function PhoneNumber({ value, onChange }) {
    return (
        <div>
            <label className="regular-text font-bold mb-2">Phone Number:</label>
            <input
            type="text"
            name="phone"
            value={value}
            onChange={onChange}
            required
            className="w-full mb-2 w-full form-input"
            />
        </div>
    );
}

export default PhoneNumber;