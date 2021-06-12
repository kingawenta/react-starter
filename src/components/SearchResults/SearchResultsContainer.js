import {connect} from 'react-redux';
import {getCardsForList} from '../../../redux/cardsRedux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id; 
  
  return {
    cards: getCardsForList(state, id),
  };
};

export default connect(mapStateToProps)(SearchResults);