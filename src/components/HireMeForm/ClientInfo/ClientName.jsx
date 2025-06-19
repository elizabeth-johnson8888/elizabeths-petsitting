function ClientName ({ value, onChange }) {
    return (
        <div>
            <label className="regular-text font-bold mb-2">Name:</label>
            <input
            type="text"
            name="owner_name"
            value={value}
            onChange={onChange}
            required
            className="mb-2 w-full form-input"
            />
        </div>
    );
}

export default ClientName;