import { useState } from "react";

function Card() {
  let [data, setData] = useState({
    name: "Suhas",
    role: "Software Developer",
    email: "suhas@gmail.com",
    phone: "+180 2233 7299",
    address: "Monpileannnnm032027 709",
    skill1: "React",
    skill2: "Node.js",
    skill3: "MongoDB",
    skill4: "Express",
  });
  function handleChanges(event) {
    let name = event.target.name;
    let value = event.target.value;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(name + " " + value);
  }
  return (
    <div className="app-container">
      <form className="card-form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="role"
          id="role"
          placeholder="Role"
          value={data.role}
          onChange={handleChanges}
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChanges}
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={data.phone}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          value={data.address}
          onChange={handleChanges}
        />
        <br />
        <input
          type="text"
          name="skill1"
          id="skill1"
          placeholder="Skill 1"
          value={data.skill1}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="skill2"
          id="skill2"
          placeholder="Skill 2"
          value={data.skill2}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="skill3"
          id="skill3"
          placeholder="Skill 3"
          value={data.skill3}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="skill4"
          id="skill4"
          placeholder="Skill 4"
          value={data.skill4}
          onChange={handleChanges}
        />
        <input type="color" name="color" id="color" onChange={handleChanges} />
        <br />
        <button type="submit">Save</button>
      </form>
      <div className="business-card">
        <header>
          <h1 className="name">{data.name}</h1>
          <p className="title">{data.role}</p>
        </header>
        <hr className="dotted-rule" />
        <div className="bottom-section">
          <div className="contact-info">
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.address}</p>
          </div>

          <div className="skills-container">
            <div className="skill-row">
              <div className="skill-tag">{data.skill1}</div>
              <div className="skill-tag">{data.skill2}</div>
            </div>
            <div className="skill-row">
              <div className="skill-tag">{data.skill3}</div>
              <div className="skill-tag">{data.skill4}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
