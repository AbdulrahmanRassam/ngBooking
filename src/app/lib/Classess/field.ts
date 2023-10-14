export class Field<T> {

  value?: T;
  values?:T[];
  key: string;
  label: string;

  validators: string[];

  controlType: string;
  type: string;
  customErrorMessages: Record<string, string> ={}
  options: { key: string; value: string }[];

  constructor(
    key: string,
    options: {
      value?: T;
      values?:T[];

      label?: string;

      validators?: string[];

      controlType?: string;
      type?: string;
      customErrorMessages?:Record<string, string>,
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.values = options.values;
    this.key = key || "";
    this.label = options.label || "";

    this.validators = options.validators || [];

    this.controlType = options.controlType || "";
    this.type = options.type || "text";
    this.options = options.options || [];
    this.customErrorMessages = options.customErrorMessages || {};
  }
}
