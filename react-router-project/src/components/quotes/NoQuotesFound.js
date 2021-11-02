import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>Page Not found</p>
      <a href="/new-quote" className="btn">
        Add a Quote
      </a>
    </div>
  );
};

export default NoQuotesFound;
