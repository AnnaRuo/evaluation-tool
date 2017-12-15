import React, { PureComponent } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
// import { push } from 'react-router-redux'
// import fetchBatches from '../actions/batches/fetch'
// import '../styles/theme'
// import Title from '../components/Title'
// import CreateBatch from '../components/CreateBatch'


class BatchList extends PureComponent {

  createListItems() {
    return this.props.batches.map((batch) => {
      return (
        <li key={batch.id}>{batch.number} {batch.startDate}</li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    batches: state.batches
  };
}

export default connect(mapStateToProps)(BatchList);



// class BatchList extends PureComponent {
//   componentWillMount() {
//     this.props.fetchBatches()
//   }
//
// renderBatch(batch, index) {
//   return (
//     <CreateBatch key={index} {...batch} />
//   )
// }
//
// render() {
//   const { batches } = this.props
//
//   if (!batches) {return null}
//
//   return(
//     <div className="BatchesList">
//
//         <header>
//           <Title content="Bla" />
//         </header>
//
//         <main>
//           {batches.map(this.renderBatch)}
//         </main>
//       </div>
//     )
//   }
// }
//
//
// const mapStateToProps = ({ batches, currentUser }) => ({ batches, currentUser })
//
// export default connect(mapStateToProps, { fetchBatches, push })(BatchList)
