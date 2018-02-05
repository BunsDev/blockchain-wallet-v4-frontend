import * as AT from './actionTypes'

// export const setBCHLatestBlock = (block_index, hash, height, time) => ({ type: AT.SET_BCH_LATEST_BLOCK, payload: { block_index, hash, height, time } })

// FETCH_BCH_DATA
export const fetchData = (context) => ({ type: AT.FETCH_BCH_DATA, payload: { context } })
export const fetchDataLoading = () => ({ type: AT.FETCH_BCH_DATA_LOADING })
export const fetchDataSuccess = (data) => ({ type: AT.FETCH_BCH_DATA_SUCCESS, payload: data })
export const fetchDataFailure = (error) => ({ type: AT.FETCH_BCH_DATA_FAILURE, payload: error })

// FETCH_BCH_FIAT_AT_TIME
export const fetchFiatAtTime = (hash, amount, time, currency) => ({ type: AT.FETCH_BCH_FIAT_AT_TIME, payload: { hash, amount, time, currency } })
export const fetchFiatAtTimeLoading = (hash, currency) => ({ type: AT.FETCH_BCH_FIAT_AT_TIME_LOADING, payload: { hash, currency } })
export const fetchFiatAtTimeSuccess = (hash, currency, data) => ({ type: AT.FETCH_BCH_FIAT_AT_TIME_SUCCESS, payload: { hash, currency, data } })
export const fetchFiatAtTimeFailure = (hash, currency, error) => ({ type: AT.FETCH_BCH_FIAT_AT_TIME_FAILURE, payload: { hash, currency, error } })

// FETCH_BCH_RATES
export const fetchRates = () => ({ type: AT.FETCH_BCH_RATES })
export const fetchRatesLoading = () => ({ type: AT.FETCH_BCH_RATES_LOADING })
export const fetchRatesSuccess = (data) => ({ type: AT.FETCH_BCH_RATES_SUCCESS, payload: data })
export const fetchRatesFailure = (error) => ({ type: AT.FETCH_BCH_RATES_FAILURE, payload: error })

// FETCH_BCH_TRANSACTIONS
export const fetchTransactions = (address, reset) => ({ type: AT.FETCH_BCH_TRANSACTIONS, payload: { address, reset } })
export const fetchTransactionsLoading = (reset) => ({ type: AT.FETCH_BCH_TRANSACTIONS_LOADING, payload: { reset } })
export const fetchTransactionsSuccess = (transactions, reset) => ({ type: AT.FETCH_BCH_TRANSACTIONS_SUCCESS, payload: { transactions, reset } })
export const fetchTransactionsFailure = (error) => ({ type: AT.FETCH_BCH_TRANSACTIONS_FAILURE, payload: error })

// FETCH_BCH_TRANSACTION_HISTORY
export const fetchTransactionHistory = (address, start, end) => ({ type: AT.FETCH_BCH_TRANSACTION_HISTORY, payload: { address, start, end } })
export const fetchTransactionHistoryLoading = () => ({ type: AT.FETCH_BCH_TRANSACTION_HISTORY_LOADING })
export const fetchTransactionHistorySuccess = (data) => ({ type: AT.FETCH_BCH_TRANSACTION_HISTORY_SUCCESS, payload: data })
export const fetchTransactionHistoryFailure = (error) => ({ type: AT.FETCH_BCH_TRANSACTION_HISTORY_FAILURE, payload: error })

// FETCH_BCH_UNSPENT
export const fetchUnspent = (source) => ({ type: AT.FETCH_BCH_UNSPENT, payload: { source } })
export const fetchUnspentLoading = () => ({ type: AT.FETCH_BCH_UNSPENT_LOADING })
export const fetchUnspentSuccess = (data) => ({ type: AT.FETCH_BCH_UNSPENT_SUCCESS, payload: data })
export const fetchUnspentFailure = (error) => ({ type: AT.FETCH_BCH_UNSPENT_FAILURE, payload: error })

// PUBLISH_BCH_TRANSACTION
export const publishTransaction = () => ({ type: AT.PUBLISH_BCH_TRANSACTION })

// REFRESH_BCH_EFFECTIVE_BALANCE
export const refreshEffectiveBalance = (coins, feePerByte) => ({ type: AT.REFRESH_BCH_EFFECTIVE_BALANCE, payload: { coins, feePerByte } })

// REFRESH_BCH_SELECTION
export const refreshSelection = (feePerByte, coins, amount, receive, change, algorithm, seed) => ({ type: AT.REFRESH_BCH_SELECTION, payload: { feePerByte, coins, amount, receive, change, algorithm, seed } })
