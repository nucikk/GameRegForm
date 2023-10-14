import { useState } from "react";
import SignInfo from "./SignInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
  const [page, setPage] = useState(0);

  const FormTitle = ["რეგისტრაცია", "პირადი ინფორმაცია", "სხვა"];

  const pageDisplay = () => {
    if(page === 0) {
      return <SignInfo />
    } else if(page === 1) {
      return <PersonalInfo />
    } else {
      return  <OtherInfo />
    }
  }

  return (
    <div className="form">
      <div className="progressBar"></div>
      <div className="form-group">
        <header className="form-header">
          <h3 className="form-name">{FormTitle[page]}</h3>
        </header>
        <main>
          <section className="form-section">
          {pageDisplay()}
           </section>
        </main>
        <footer className="form-footer">
          <button className="btn-prev"
            disabled={page == 0}
            onClick={() => { setPage((currentPage) => currentPage - 1) }}
          >prev</button>
          <button className="btn-next"
            disabled={page == FormTitle.length - 1}
            onClick={() => { setPage((currentPage) => currentPage + 1) }}
          >next</button>
        </footer>
      </div>
    </div>
  );
}

export default Form;
