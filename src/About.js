import React from "react";
import useList from "./hooks/useList";

const About = () => {
  const { data, error } = useList();
  console.log(data);
  return <div>This is about page</div>;
};

export default About;

About.propTypes = {};
