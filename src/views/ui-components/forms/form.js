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

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      selectedOption: "",
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
    this.setState({
      selectedOption: event.target.value,
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
              <TabPanel>{/* <Code source={`${htmlString}`} /> */}</TabPanel>
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
              <TabPanel>{/* <Code source={`${htmlString}`} /> */}</TabPanel>
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
              <TabPanel>{/* <Code source={`${htmlString}`} /> */}</TabPanel>
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
              <TabPanel>{/* <Code source={`${htmlString}`} /> */}</TabPanel>
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
                <FormRadio
                  label="Radio option 1"
                  name="group"
                  id="id1"
                  checked={this.state.selectedOption === this.state.value}
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <FormRadio
                  label="Radio option 2"
                  name="group"
                  id="id2"
                  checked={this.state.selectedOption === this.state.value}
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </TabPanel>
              <TabPanel>{/* <Code source={`${htmlString}`} /> */}</TabPanel>
            </Tabs>
          </div>
          <input type="submit" value="Submit" />
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
