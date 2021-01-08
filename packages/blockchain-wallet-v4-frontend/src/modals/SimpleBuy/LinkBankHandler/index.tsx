import { bindActionCreators, Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { isEmpty } from 'ramda'
import React, { PureComponent } from 'react'

import { actions } from 'data'
import { RemoteDataType } from 'core/types'
import { RootState } from 'data/rootReducer'
import DataError from 'components/DataError'

import { getData } from './selectors'
import Loading from './template.loading'
import Success from './template.success'

class LinkBankHandler extends PureComponent<Props, State> {
  componentDidMount () {
    window.addEventListener('message', this.handlePostMessage, false)
  }

  componentWillUnmount () {
    window.removeEventListener('message', this.handlePostMessage, false)
  }

  handlePostMessage = (event: MessageEvent) => {
    if (event.data.from !== 'yodlee') return
    if (event.data.to !== 'sb') return

    const { sites } = event.data
    if (!isEmpty(sites)) {
      this.props.simpleBuyActions.fetchBankTransferUpdate(sites)
      this.props.simpleBuyActions.fetchBTUpdateLoading()
    } else {
      this.props.simpleBuyActions.setStep({ step: 'LINK_BANK' })
    }
  }

  render () {
    return this.props.data.cata({
      Success: val => <Success {...val} {...this.props} {...this.state} />,
      Failure: e => <DataError message={{ message: e }} />,
      Loading: () => <Loading />,
      NotAsked: () => <Loading />
    })
  }
}

const mapStateToProps = (state: RootState): LinkStatePropsType => ({
  data: getData(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  simpleBuyActions: bindActionCreators(actions.components.simpleBuy, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type OwnProps = {
  handleClose: () => void
}
export type SuccessStateType = {
  iFrameUrl: string
}
type LinkStatePropsType = {
  data: RemoteDataType<string, SuccessStateType>
}
export type Props = OwnProps & ConnectedProps<typeof connector>
export type State = { threeDSCallbackReceived: boolean }

export default connector(LinkBankHandler)
