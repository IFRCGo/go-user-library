import React from "react";
import ReactDOMServer from "react-dom/server";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  FormInput,
  FormTextarea,
  FormCheckbox,
  FormRadio,
  FormSelect,
} from "./../../../components/form-elements";

import Button from "../../../components/button";
import Code from "./../../../hoc/source-code";

const InputString = ReactDOMServer.renderToStaticMarkup(
  <FormInput label="label" type="text" name="name" id="id" value="" autoFocus />
);

const TextareaString = ReactDOMServer.renderToStaticMarkup(
  <FormTextarea label="label" type="text" name="textarea" id="id" value="" />
);

const RadioString = ReactDOMServer.renderToStaticMarkup(
  <FormRadio
    label="Radio"
    name="level"
    id="id1"
    type="radio"
    checked=""
    value="1"
  />
);

const CheckboxString = ReactDOMServer.renderToStaticMarkup(
  <FormCheckbox
    name="Checkbox 1"
    id="id1"
    checked=""
    type="checkbox"
    description="Checkbox 1"
    value="1"
  />
);

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      selectList: [
        { value: "USA", label: "USA" },
        { value: "CANADA", label: "CANADA" },
      ],
      fields: { name: "", textarea: "" },
      errors: {},
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hadleRadio = this.hadleRadio.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;

    this.setState({
      fields,
    });
  }

  hadleRadio(event) {
    const value = event.target.value;
    this.setState({
      value,
    });
  }

  handleCheckbox(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      checked: value,
    });
  }

  validateForm() {
    let fields = this.state.fields;
    let currentState = this.state.active;
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please fill in the field.";
    }

    if (!fields["textarea"]) {
      formIsValid = false;
      errors["textarea"] = "*Please fill in the field.";
    }

    this.setState({
      errors: errors,
      active: currentState,
    });
    return formIsValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validateForm()) {
      this.setState({ submitted: !this.state.submitted });
    }
  }

  render() {
    const levels = ["Option 1", "Option 2"];

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="inner">
            <div className="fold__header">
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Input type text</h2>
              </div>
            </div>
            <div className="fold__body">
              <div className="container-full">
                <p>This is a input type and this is some information</p>
              </div>
            </div>
          </div>
          <div className="tab__wrap">
            <Tabs>
              <TabList>
                <Tab>Example</Tab>
                <Tab>Code</Tab>
              </TabList>

              <TabPanel>
                <FormInput
                  label="label"
                  type="text"
                  name="name"
                  id="id"
                  value={this.state.fields.name}
                  onChange={this.handleChange}
                  autoFocus
                >
                  <p className="form__error">{this.state.errors.name}</p>
                </FormInput>
              </TabPanel>
              <TabPanel>
                <Code source={`${InputString}`} />
              </TabPanel>
            </Tabs>
          </div>
          <div className="inner">
            <div className="fold__header">
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Input textarea</h2>
              </div>
            </div>
            <div className="fold__body">
              <div className="container-full">
                <p>This is a input type and this is some information</p>
              </div>
            </div>
          </div>
          <div className="tab__wrap">
            <Tabs>
              <TabList>
                <Tab>Example</Tab>
                <Tab>Code</Tab>
              </TabList>

              <TabPanel>
                <FormTextarea
                  label="label"
                  type="text"
                  name="textarea"
                  id="id"
                  value={this.state.fields.textarea}
                  onChange={this.handleChange}
                >
                  <p className="form__error">{this.state.errors.textarea}</p>
                </FormTextarea>
              </TabPanel>
              <TabPanel>
                <Code source={`${TextareaString}`} />
              </TabPanel>
            </Tabs>
          </div>
          <div className="inner">
            <div className="fold__header">
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Select option</h2>
              </div>
            </div>
            <div className="fold__body">
              <div className="container-full">
                <p>This is a Select option and this is some information</p>
              </div>
            </div>
          </div>
          <div className="tab__wrap">
            <Tabs>
              <TabList>
                <Tab>Example</Tab>
                <Tab>Code</Tab>
              </TabList>

              <TabPanel>
                <FormSelect
                  name="Select form"
                  onChange={this.handleChange}
                  options={this.state.selectList}
                  value={this.state.selectList.value}
                />
              </TabPanel>
              <TabPanel>
                <Code source={`${InputString}`} />
              </TabPanel>
            </Tabs>
          </div>
          <div className="inner">
            <div className="fold__header">
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Input checkbox</h2>
              </div>
            </div>
            <div className="fold__body">
              <div className="container-full">
                <p>This is a input checkbox and this is some information</p>
              </div>
            </div>
          </div>
          <div className="tab__wrap">
            <Tabs>
              <TabList>
                <Tab>Example</Tab>
                <Tab>Code</Tab>
              </TabList>

              <TabPanel>
                <FormCheckbox
                  name="Checkbox 1"
                  id="id1"
                  onClick={this.handleCheckbox}
                  checked={this.state.checked}
                  type="checkbox"
                  description="Checkbox 1"
                  value={this.state.value}
                  onChange={this.handleCheckbox}
                />
              </TabPanel>
              <TabPanel>
                <Code source={`${CheckboxString}`} />
              </TabPanel>
            </Tabs>
          </div>
          <div className="inner">
            <div className="fold__header">
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Input radio button</h2>
              </div>
            </div>
            <div className="fold__body">
              <div className="container-full">
                <p>This is a input radio button and this is some information</p>
              </div>
            </div>
          </div>
          <div className="tab__wrap">
            <Tabs>
              <TabList>
                <Tab>Example</Tab>
                <Tab>Code</Tab>
              </TabList>

              <TabPanel>
                {levels.map((level, index) => (
                  <span key={index}>
                    <FormRadio
                      label={level}
                      name="level"
                      id="id1"
                      type="radio"
                      checked={this.state.value === level}
                      value={level}
                      onChange={this.hadleRadio}
                    />
                  </span>
                ))}
              </TabPanel>
              <TabPanel>
                <Code source={`${RadioString}`} />
              </TabPanel>
            </Tabs>

            <Button
              type="submit"
              classSize="small"
              classType="primary-filled"
              name="submit"
            />
          </div>
        </form>
        <div
          className={
            this.state.submitted ? "form-message show" : "form-message"
          }
        >
          <p>You have submitted:</p>
          <span>{this.state.fields.name}</span>
          <br />
          <span>{this.state.fields.textarea}</span>
        </div>
      </div>
    );
  }
}
export default Form;
