const MyParagraph = (props) => {
  console.log('MyParagrph running');

  return <p>{props.children}</p>;
};

export default MyParagraph;
