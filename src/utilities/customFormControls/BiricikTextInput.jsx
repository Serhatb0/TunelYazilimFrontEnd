import React from "react";
import { useField } from "formik";
import { Form, Label } from "semantic-ui-react";

export default function BiricikTextInput({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <section
      style={{ margin: "0em 0em 0em 0em" }}
      error={meta.touched && !!meta.error}
    >
      <Form.Input
       
        {...field}
        {...props}
        style={{ margin: "0em 0em 1em 0em" }}
      />
      {meta.touched && !!meta.error ? (
        <Label pointing basic color="red" content={meta.error}></Label>
      ) : null}
    </section>
  );
}
