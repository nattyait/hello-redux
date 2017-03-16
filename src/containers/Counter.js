// connect store and component --> connect
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { addCounter } from '../actions/counter'

//the whole state as argument. Some function will send the whole state here.
const mapStateToProps = (state) => ({
  counter: state.counter,
})

//provide store.dispatch for this function
const mapDispatchToProps = (dispatch) => ({
  addCounter: () => dispatch(addCounter()),
})
// function connect get mapStateToProps and return function that get Counter as a parameter
export default connect(mapStateToProps, mapDispatchToProps)(Counter)