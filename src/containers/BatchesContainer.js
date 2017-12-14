import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchBatches from '../actions/batches/fetch'
import '../styles/theme'
import Title from '../components/Title'
import StudentItem from '../components/StudentItem'


class BatchesContainer extends PureComponent {
  componentWillMount() {
    this.props.fetchBatches()
  }

renderBatch(batch, index) {
  return (
    <StudentItem key={index} {...batch} />
  )
}

render() {
  const { batches } = this.props

  if (!batches) {return null}

  return(
    <div className="BatchesContainer">

        <header>
          <Title content="Bla" />
        </header>

        <main>
          {batches.map(this.renderBatch)}
        </main>
      </div>
    )
  }
}


const mapStateToProps = ({ batches, currentUser }) => ({ batches, currentUser })

export default connect(mapStateToProps, { fetchBatches, push })(BatchesContainer)
