import { useState } from "react";
import SignInfo from "./SignInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
  const [page, setPage] = useState(0);

  const FormTitles = ["რეგისტრაცია", "პირადი ინფორმაცია", "სხვა"];

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    userName: "",
    nationality: "",
    age: "",
  });

  const pageDisplay = () => {
    if (page === 0) {
      return <SignInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressBar">
        <div
          className="stage"
          style={{ width: page === 0 ? "33%" : page == 1 ? "66%" : "100%" }}
        ></div>
      </div>
      <div className="form-group">
        <header className="form-header">
          <h3 className="form-name">{FormTitles[page]}</h3>
        </header>
        <main>
          <section className="form-section">{pageDisplay()}</section>
        </main>
        <footer className="form-footer">
          <button
            className="btn-prev"
            disabled={page == 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }} >
            prev
          </button>
          <button
            className="btn-next"
            // disabled={page == FormTitle.length - 1}
            onClick={() => {
              
          if(page === FormTitles.length - 1) {
            alert("Form Submit")
          } else {
            setPage((currentPage) => currentPage + 1)
          }
            }}
          >
          {page == FormTitles.length -1 ? "Submit" : "Next"}

          </button>
        </footer>
      </div>
    </div>
  );
}

export default Form;
