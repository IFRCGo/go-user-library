import React from "react";
import ReactDOMServer from "react-dom/server";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import Select from "react-select";
import Switch from "react-switch";
import {
    FormInput,
    FormTextarea,
    FormCheckbox,
    FormRadio,
} from "./../../../components/form-elements";

import Button from "../../../components/button";
import Code from "./../../../hoc/source-code";

const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
];

const InputString = ReactDOMServer.renderToStaticMarkup(
    <div className="form__group">
        <div className="form__group__wrap">
            <div className="form__inner-header">
                <div className="form__inner-headline">
                    <label className="form__label">label</label>
                </div>
            </div>
            <div className="form__inner-body">
                <input
                    type="text"
                    id="id"
                    name="name"
                    className="form__control form__control--medium"
                    value=""
                    autoFocus=""
                    readOnly
                />
            </div>
        </div>
    </div>
);

const TextareaString = ReactDOMServer.renderToStaticMarkup(
    <div className="form__group">
        <div className="form__group__wrap">
            <div className="form__inner-header">
                <div className="form__inner-headline">
                    <label className="form__label" htmlFor="id">
                        label
                    </label>
                </div>
            </div>
            <div className="form__inner-body">
        <textarea
            id="id"
            name="textarea"
            className="form__control form__control--medium"
        ></textarea>
            </div>
        </div>
    </div>
);

const RadioString = ReactDOMServer.renderToStaticMarkup(
    <label
        className="form__option form__option--custom-radio form__option--inline"
        data-for="id1-tooltip"
        data-tip=""
    >
        <input type="radio" name="level" id="id1" value="1"/>
        <span className="form__option__ui"></span>
        <span className="form__option__text">Radio </span>
    </label>
);

const CheckboxString = ReactDOMServer.renderToStaticMarkup(
    <label
        className="form__option form__option--custom-checkbox"
        data-for="id1-tooltip"
        data-tip=""
    >
        <input type="checkbox" name="Checkbox 1" id="id1" value="1"/>
        <span className="form__option__ui"></span>
        <span className="form__option__text">
      <em>Checkbox 1</em>
    </span>
    </label>
);

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.state = {
            checked: true,
            fields: {name: "", textarea: ""},
            errors: {},
            submitted: false,
            selectedValue: "",
            boxOne: false,
            boxTwo: false,
            boxThree: false,
            switchChecked: false
        };
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;

        this.setState({
            fields,
        });
    }

    handleSwitchChange(switchChecked) {
        this.setState({ switchChecked });
    }

    handleRadio(event) {
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

    handleSelect = (value) => {
        this.setState({selectedValue: value});
    };

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
            this.setState({submitted: !this.state.submitted});
        }
    }


    handleCheckboxChange(e, fruit) {
        const newState = {};
        newState[fruit] = !this.state[fruit];
        this.setState({ ...this.state, ...newState });
    }

    render() {
        const levels = ["Option 1", "Option 2"];
        const selectList = [
            {value: "1", label: "Option 1"},
            {value: "2", label: "Option 2"},
            {value: "3", label: "Option 3"},
            {value: "4", label: "Option 4"},
        ];
        const {selectedOption} = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="inner">
                        <div className="fold__header">
                            <div className="fold__header__block">
                                <h2 className="fold__title margin-reset">Text field forms</h2>
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
                                    label="Enabled / Hover - Assistive text "
                                    type="text"
                                    name="name"
                                    id="id"
                                    value={this.state.fields.name}
                                    onChange={this.handleChange}
                                    autoFocus
                                >
                                    <p className="form__error">{this.state.errors.name}</p>
                                </FormInput>

                                <FormInput
                                    label="Text field / Error - Assistive text "
                                    type="text"
                                    name="name"
                                    id="id"
                                    value={this.state.fields.name}
                                    onChange={this.handleChange}
                                    autoFocus
                                >
                                    <p className="form__error">{this.state.errors.name}</p>
                                </FormInput>

                                <FormInput
                                    label="Text field / Error - Assistive text "
                                    type="text"
                                    name="name"
                                    id="id"
                                    value={this.state.fields.name}
                                    onChange={this.handleChange}
                                    autoFocus
                                >
                                    <p className="form__error">{this.state.errors.name}</p>
                                </FormInput>

                                <FormInput
                                    label="Text field / Disabled"
                                    type="text"
                                    name="name"
                                    id="id"
                                    value='Label'
                                    onChange={this.handleChange}
                                    autoFocus
                                    disabled="enabled"
                                >
                                    <p className="form__error">{this.state.errors.name}</p>
                                </FormInput>

                            </TabPanel>
                            <TabPanel>
                                <Code source={`${InputString}`}/>
                            </TabPanel>
                        </Tabs>
                    </div>

                    <div className="inner">
                        <div className="fold__header">
                            <div className="fold__header__block">
                                <h2 className="fold__title margin-reset">Text field filters</h2>
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
                                <label>Dropdown / Enabled / Hover / Filled / Selected</label>
                                <Select
                                    name="organizationType"
                                    value={this.state.selectedValue}
                                    onChange={this.handleSelect}
                                    options={selectList}
                                    autoFocus={false}
                                />
                                <br/>
                                <label>Dropdown / Disabled</label>
                                <Select
                                    name="organizationTypeTwo"
                                    value='Drop'
                                    onChange={this.handleSelect}
                                    options={selectList}
                                    autoFocus={false}
                                    disabled='true'
                                />
                                <br/>
                                <label>Search field / Enabled</label>
                                <div className="filter-dropdown">
                                    <form className="form-search form-inline">
                                        <input type="text" className="search-query"
                                               placeholder="Search"/>

                                    </form>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <Code source={`${InputString}`}/>
                            </TabPanel>
                        </Tabs>
                    </div>

                    <div className="inner">
                        <div className="fold__header">
                            <div className="fold__header__block">
                                <h2 className="fold__title margin-reset">Search field / Selected</h2>
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
                                <label>Dropdown / Options</label>
                                <div className="filter-dropdown">
                                    <form className="form-search form-inline">
                                        <Select
                                            name="organizationType"
                                            value={this.state.selectedValue}
                                            onChange={this.handleSelect}
                                            options={selectList}
                                            autoFocus={false}
                                            className="search-query"
                                        />
                                    </form>
                                </div>
                                <br/>
                            </TabPanel>
                            <TabPanel>
                                <Code source={`${TextareaString}`}/>
                            </TabPanel>
                        </Tabs>
                    </div>

                    <div className="inner">
                        <div className="fold__header">
                            <div className="fold__header__block">
                                <h2 className="fold__title margin-reset">Selection  / Radio button</h2>
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
                                <div className='checkbox'>
                                <FormCheckbox
                                    checked={this.state.boxOne}
                                    onChange={e => this.handleCheckboxChange(e, "boxOne")}
                                >
                                    Box One
                                </FormCheckbox>
                                <FormCheckbox
                                    checked={this.state.boxTwo}
                                    onChange={e => this.handleCheckboxChange(e, "boxTwo")}
                                >
                                    Box Two
                                </FormCheckbox>
                                <FormCheckbox
                                    checked={this.state.boxThree}
                                    onChange={e => this.handleCheckboxChange(e, "boxThree")}
                                >
                                    Box Three
                                </FormCheckbox>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <Code source={`${CheckboxString}`}/>
                            </TabPanel>
                        </Tabs>
                    </div>

                    <div className="inner">
                        <div className="fold__header">
                            <div className="fold__header__block">
                                <h2 className="fold__title margin-reset">Selection  / Radio button</h2>
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
                                            onChange={this.handleRadio}
                                        />
                                  </span>
                                ))}
                            </TabPanel>
                            <TabPanel>
                                <Code source={`${RadioString}`}/>
                            </TabPanel>
                        </Tabs>
                    </div>

                    <div className="inner">
                        <div className="fold__header">
                            <div className="fold__header__block">
                                <h2 className="fold__title margin-reset">Selection  / Toggle switches</h2>
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
                                <label>
                                    <Switch
                                        onChange={this.handleSwitchChange}
                                        checked={this.state.switchChecked}
                                        onColor='#F5333F'
                                        offColor='#E0E0E0'
                                        uncheckedIcon=''
                                        checkedIcon=''
                                    />
                                </label>

                            </TabPanel>
                            <TabPanel>
                                <Code source={`${RadioString}`}/>
                            </TabPanel>
                        </Tabs>
                    </div>
                </form>

                <div className="inner">
                    <div className="fold__header">
                        <div className="fold__header__block">
                            <h2 className="fold__title margin-reset">Textarea</h2>
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

                            <div
                                className={
                                    this.state.submitted ? "form-message show" : "form-message"
                                }
                            >
                                <p>You have submitted:</p>
                                <span>{this.state.fields.name}</span>
                                <br/>
                                <span>{this.state.fields.textarea}</span>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <Code source={`${TextareaString}`}/>
                        </TabPanel>
                    </Tabs>
                </div>

            </div>


        );
    }
}

export default Form;
