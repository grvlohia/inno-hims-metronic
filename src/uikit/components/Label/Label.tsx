import clsx from "clsx";
import { CSSProperties } from "react";

interface Props {
  /** Text to display in label */
  text: string;
  /** Title of the label. */
  title?: string; // Use on required input labels to override default required title
  /** Ties label to input  */
  htmlFor?: string;
  /** Defines whether input is required. */
  isRequired?: boolean;
  /**
   * Defines the class of the label.
   */
  className?: string;
  /**
   * Defines the style of the label.
   */
  style?: CSSProperties;
}

const Label = (props: Props) => {
  const { isRequired, text, title, className, style, htmlFor } = props;
  return (
    <label
      title={title || "This is a required input"}
      className={clsx(
        "form-label fw-bold text-dark fs-6 mb-0",
        className,
        isRequired && "required"
      )}
      htmlFor={htmlFor}
      style={style}
    >
      {text}
    </label>
  );
};

Label.defaultProps = {
  title: undefined,
  htmlFor: undefined,
};
export { Label };
