import React from "react";

const FormRoot: React.FC<{ onSubmit: (e: React.FormEvent) => void; children: React.ReactNode }> = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

const FormField: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>;
const FormLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => <label>{children}</label>;
const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => <input {...props} />;
const FormError: React.FC<{ children: React.ReactNode }> = ({ children }) => <span style={{ color: "red" }}>{children}</span>;
const FormActions: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>;
const FormSubmit: React.FC<{ children: React.ReactNode }> = ({ children }) => <button type="submit">{children}</button>;

export const Form = Object.assign(FormRoot, {
  Field: FormField,
  Label: FormLabel,
  Input: FormInput,
  Error: FormError,
  Actions: FormActions,
  Submit: FormSubmit,
});
