function Address ({ value, onChange }) {
    return (
        <div>
            <label className="regular-text font-bold mb-2">Address:</label>
            <input
            type="text"
            name="address"
            value={value}
            onChange={onChange}
            required
            className="w-full mb-4 form-input"
            />
        </div>
    );
}

export default Address;