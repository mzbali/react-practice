import QuoteList from '../components/quotes/QuoteList';
const Dummy_Quotes = [
  { id: 'q1', author: 'mzbali', text: 'Some balls plays' },
  { id: 'q2', author: 'herbet', text: 'Fear is the mind killer' },
  { id: 'q3', author: 'Jack', text: 'Good things come in three' },
];

const AllQuotes = () => {
  return <QuoteList quotes={Dummy_Quotes} />;
};

export default AllQuotes;
