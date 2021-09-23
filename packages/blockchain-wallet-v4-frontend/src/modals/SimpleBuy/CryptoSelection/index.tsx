import React, { PureComponent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { Remote } from '@core'
import { ExtractSuccess } from '@core/types'
import { actions, selectors } from 'data'
import { RootState } from 'data/rootReducer'

import Loading from '../template.loading'
import { getData } from './selectors'
import Failure from './template.failure'
import Success from './template.success'

class CryptoSelection extends PureComponent<Props> {
  componentDidMount() {
    if (this.props.fiatCurrency && !Remote.Success.is(this.props.data)) {
      this.props.buySellActions.fetchPairs({ currency: this.props.fiatCurrency })
      this.props.buySellActions.fetchFiatEligible(this.props.fiatCurrency)
      this.props.buySellActions.fetchSDDEligibility()
    }
  }

  render() {
    return this.props.data.cata({
      Failure: (e) => {
        return <Failure {...this.props} />
      },
      Loading: () => <Loading />,
      NotAsked: () => <Loading />,
      Success: (val) => <Success {...this.props} {...val} />
    })
  }
}

const mapStateToProps = (state: RootState) => ({
  data: getData(state),
  fiatCurrency: selectors.components.simpleBuy.getFiatCurrency(state) || 'USD',
  isFirstLogin: selectors.auth.getFirstLogin(state),
  sddTransactionFinished: selectors.components.simpleBuy.getSddTransactionFinished(state)
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  analyticsActions: bindActionCreators(actions.analytics, dispatch),
  buySellActions: bindActionCreators(actions.components.buySell, dispatch),
  formActions: bindActionCreators(actions.form, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export type OwnProps = {
  handleClose: () => void
}
export type SuccessStateType = ExtractSuccess<ReturnType<typeof getData>>
export type LinkDispatchPropsType = ReturnType<typeof mapDispatchToProps>
export type Props = OwnProps & ConnectedProps<typeof connector>

export default connector(CryptoSelection)
