import {Currency} from '../../currencies/models/currencies.models';

export interface Transaction {
  id?: string
  description: string
  currencyId: string
  totalCreditAmount: number
  totalDebitAmount: number
  date: Date
  currency?: Currency
}

export interface TransactionLine {
  id?: string
  accountId: '1',
  debitAmount: number
  creditAmount: number
}

export const TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    currencyId: '1',
    currency: {
      id: '1',
      name: 'Euro',
      code: 'EUR',
      primary: true
    },
    totalCreditAmount: 1000.0,
    totalDebitAmount: 1000.0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: new Date('2025-07-19')
  },
  {
    id: '2',
    currencyId: '1',
    currency: {
      id: '1',
      name: 'Euro',
      code: 'EUR',
      primary: true
    },
    totalCreditAmount: 800.0,
    totalDebitAmount: 800.0,
    description: 'Quisque rutrum ligula at sem rhoncus laoreet.',
    date: new Date('2025-07-18')
  }
]
