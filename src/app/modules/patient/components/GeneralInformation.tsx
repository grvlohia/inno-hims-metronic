import { Button, Panel } from "../../../../uikit";
import SelectWithLabelFormGroup, {
  Option,
} from "../../../shared/components/input/SelectWithLabelFormGroup";
import { TextInputWithLabel } from "../../../shared/components/input/TextInputWithLabel";

const sexOptions: Option[] = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
  { label: "Unknown", value: "unknown" },
];

const typeOptions: Option[] = [
  { label: "Charity", value: "charity" },
  { label: "Private", value: "private" },
];

const bloodTypeOptions: Option[] = [
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
  { label: "Unknown", value: "unknown" },
];

const GeneralInformation = () => {
  return (
    <>
      <Panel title="Basic Information" collapsible color="primary">
        <div className="row">
          <div className="col-md-2">
            <TextInputWithLabel
              name="prefix"
              label="Prefix"
              placeholder="Prefix"
              type="text"
              value=""
              isEditable
            />
          </div>
          <div className="col-md-4">
            <TextInputWithLabel
              name="firstName"
              label="First Name"
              placeholder="First Name"
              type="text"
              value=""
              isEditable
              isRequired
            />
          </div>
          <div className="col-md-4">
            <TextInputWithLabel
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
              type="text"
              value=""
              isEditable
              isRequired
            />
          </div>
          <div className="col-md-2">
            <TextInputWithLabel
              name="suffix"
              label="Suffix"
              placeholder="Suffix"
              type="text"
              value=""
              isEditable
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <SelectWithLabelFormGroup
              name="sex"
              label="Sex"
              options={sexOptions}
              defaultSelected={sexOptions.filter(
                ({ value }) => value === "Male"
              )}
              isEditable
            />
          </div>
          <div className="col">
            <SelectWithLabelFormGroup
              name="type"
              label="Patient Type"
              options={typeOptions}
              isEditable
            />
          </div>
          <div className="col">
            <SelectWithLabelFormGroup
              name="bloodType"
              label="Blood Type"
              options={bloodTypeOptions}
              isEditable
            />
          </div>
        </div>
      </Panel>
      <br />
      <Panel title="Contact Information" color="primary"></Panel>
      <div className="row float-right">
        <div className="mt-3 mr-3">
          <Button
            className="btn-save me-2"
            color="warning"
            icon="bi bi-caret-right-fill"
            iconColor="success"
            iconLocation="right"
            iconSize="2"
          >
            Save
          </Button>
          <Button className="btn-cancel me-2" color="danger">
            Cancel
          </Button>
          <Button className="btn-cancel" color="info">
            Edit
          </Button>
        </div>
      </div>
    </>
  );
};

export default GeneralInformation;
