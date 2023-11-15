

function OtherInfo({ formData, setFormData }) {
  return (
    <>
      <div className="sign-info">
        <input type="text" placeholder="Enter your Nationality"
          value={formData.nationality}
          onChange={(e) =>
            setFormData({ ...formData, nationality: e.target.value })
          }
        />

        <input type="number" placeholder="Enter your age"
          value={formData.age}
          onChange={(e) =>
            setFormData({ ...formData, age: e.target.value })
          }
        />
      </div>
    </>
  );
}

export default OtherInfo;
