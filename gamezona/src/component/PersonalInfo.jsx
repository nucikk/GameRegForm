function PersonalInfo({ formData, setFormData }) {
  return (
    <>
      <div className="sign-info">
        <input
          type="text"
          placeholder="Enter your firs name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter your username"
          value={formData.userName}
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
        />
      </div>
    </>
  );
}

export default PersonalInfo;
