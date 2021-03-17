import React from "react";
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
    this.state = { value: "", selectedOption: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hadleRadio = this.hadleRadio.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(event) {
    this.setState({ value: event.target.value });
  }

  hadleRadio(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
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
                value={this.state.value}
                onChange={this.handleChange}
                autoFocus
              />
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
                name="name"
                id="id"
                value={this.state.value}
                onChange={this.handleChange}
              />
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

            <TabPanel>{/* <FormSelect /> */}</TabPanel>
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
                label="label"
                type="checkbox"
                name="name"
                id="id"
                value={this.state.value}
                onChange={this.handleChange}
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
    );
  }
}
export default Form;
