import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const ascending = query.get('sort') === 'asc';
  const sortedQuotes = sortQuotes(props.quotes, ascending);
  const sortingBtnHandler = () => {
    //history.push(`/quotes?sort=${!ascending ? 'asc' : 'desc'}`);
    history.push({
      pathname: location.pathname,
      search: `?sort=${ascending ? 'desc' : 'asc'}`,
    });
  };

  return (
    <Fragment>
      <button onClick={sortingBtnHandler} className="btn--flat">
        Sort {ascending ? 'Descending↓' : 'Ascending↑'}
      </button>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
