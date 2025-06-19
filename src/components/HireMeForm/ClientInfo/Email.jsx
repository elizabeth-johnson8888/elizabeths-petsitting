function Email ({ value, onChange }) {
    return (
        <div>
            <label className="regular-text font-bold mb-2">Email:</label>
            <input
            type="text"
            name="email"
            value={value}
            onChange={onChange}
            required
            className="mb-2 w-full form-input"
            />
        </div>
    );
}

export default Email;