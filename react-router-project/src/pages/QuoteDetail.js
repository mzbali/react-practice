import { Fragment } from 'react';
import { Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const Dummy_Quotes = [
  { id: 'q1', author: 'mzbali', text: 'Some balls plays' },
  { id: 'q2', author: 'herbet', text: 'Fear is the mind killer' },
  { id: 'q3', author: 'Jack', text: 'Good things come in three' },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const quote = Dummy_Quotes.find((item) => item.id === params.quoteId);
  if (!quote) {
    return <p>Quote not found.</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`} exact>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
