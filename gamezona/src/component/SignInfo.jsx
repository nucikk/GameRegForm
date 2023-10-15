function SignInfo({ formData, setFormData }) {
  return (
    <>
      <div className="sign-info">
        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter your confirm password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
      </div>
    </>
  );
}

export default SignInfo;
