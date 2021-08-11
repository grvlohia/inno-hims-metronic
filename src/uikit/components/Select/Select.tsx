import { Typeahead } from "react-bootstrap-typeahead";

interface SelectOption<T> {
  label: string;
  value: T;
}

interface Props<T> {
  id: string;
  options: SelectOption<T>[];
  defaultSelected?: SelectOption<T>[];
  onChange?: (values: T[]) => void;
  placeholder?: string;
  multiple?: boolean;
  disabled?: boolean;
  isValid?: boolean;
  isInvalid?: boolean;
  feedback?: string;
}

function Select<T>(props: Props<T>) {
  const {
    id,
    options,
    defaultSelected,
    onChange,
    placeholder,
    multiple,
    disabled,
    isInvalid,
    feedback,
    isValid,
  } = props;

  return (
    <>
      <Typeahead<SelectOption<T>>
        id={id}
        options={options as any}
        selected={defaultSelected}
        onChange={(selected: SelectOption<T>[]) => {
          if (onChange !== undefined) {
            onChange(selected.map((option) => option.value));
          }
        }}
        placeholder={placeholder}
        multiple={multiple}
        disabled={disabled}
        isInvalid={isInvalid}
        filterBy={(option: SelectOption<T>, selectProps: any) => {
          // multiple - filter-out current selections
          const isMatch =
            option.label
              .toLowerCase()
              .indexOf(selectProps.text.toLowerCase()) !== -1;

          if (selectProps.selected.length && selectProps.multiple) {
            return selectProps.selected.every(
              (selected: any) => selected.label !== option.label && isMatch
            );
          }
          // single (custom)- display all options
          if (selectProps.selected.length) {
            return true;
          }
          // default filter as normal

          return isMatch;
        }}
      />
      {isValid ? (
        <div className="fv-plugins-message-container valid-feedback">
          <div className="fv-green-block">
            <span role="alert">{feedback}</span>
          </div>
        </div>
      ) : null}
      {isInvalid ? (
        <div className="fv-plugins-message-container invalid-feedback">
          <div className="fv-help-block">
            <span role="alert">{feedback}</span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export { Select };
