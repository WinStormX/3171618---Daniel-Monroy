import React from "react";

const CardRoot: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
    {children}
  </div>
);

const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>;
const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3>{children}</h3>;
const CardActions: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>;
const CardBody: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>;
const CardFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>;

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Actions: CardActions,
  Body: CardBody,
  Footer: CardFooter,
});
