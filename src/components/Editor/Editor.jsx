import React, { useState } from "react";

import styles from "./Editor.module.css";
import { InputControl } from "../InputControl/InputControl";
import { X } from "react-feather";

export const Editor = (props) => {
  const sections = props.sections;

  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const workExBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg, Frontend developer"
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. Flipkart"
        />
      </div>

      <div className={styles.row}>
        <InputControl
          label="Certificate link"
          placeholder="Enter Certificate link"
        />
        <InputControl
          label="Location"
          placeholder="Enter Location eg. Remote"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
        />
        <InputControl
          label="End date"
          type="date"
          placeholder="Enter end date of work"
        />
      </div>
      <div className={styles.column}>
        <label htmlFor="">Enter Work Description</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
      </div>
    </div>
  );

  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="title"
          placeholder="Enter Title eg. e-commerce app"
        />
        <InputControl
          label="Overview"
          placeholder="Enter basics overview of project"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter deployed link of project"
        />
        <InputControl
          label="Github link"
          placeholder="Enter github link of project"
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="">Enter project description</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
        <InputControl placeholder="Line 4" />
      </div>
    </div>
  );

  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Title" placeholder="Enter title eg. B-tech" />
      </div>
      <InputControl
        label="college name"
        placeholder="Enter name of your college"
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
        />
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name Vivekananda Sahu"
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg. Frontend Developer"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your Linkedin profile Link"
        />
        <InputControl
          label="Github Link "
          placeholder="Enter your Github profile link"
        />
      </div>
      <div className={styles.row}>
        <InputControl label="Email" placeholder="Enter your email" />
        <InputControl
          label="Enter Phone"
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );

  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label htmlFor="">List your achievements</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
        <InputControl placeholder="Line 4" />
      </div>
    </div>
  );

  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
        placeholder="Enter your objective/ summary"
      />
    </div>
  );

  const otherBody = (
    <div className={styles.detail}>
      <InputControl label="Other" placeholder="Enter Something" />
    </div>
  );

  const generatedBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            key={key}
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={styles.body}>
        <InputControl label="Title" placeholder="Enter section title" />

        <div className={styles.chips}>
          <div className={styles.chip}>
            <p>Project 1</p>
            <X/>
          </div>
          <div className={styles.chip}>
            <p>Project 2</p>
            <X />
          </div>
        </div>

        {generatedBody(sections)}
      </div>
    </div>
  );
};
