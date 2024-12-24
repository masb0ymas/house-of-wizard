'use client'

import _ from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import Loader from '~/components/custom/loader'
import { TransactionEntity } from '~/data/entity/transaction'
import { findTransactionById } from '../action'

type IProps = {
  id: string
}

export default function CheckoutMidtrans({ id }: IProps) {
  const [transaction, setTransaction] = useState<TransactionEntity | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getTransaction = useCallback(async () => {
    const { data } = await findTransactionById(id)
    setTransaction(data)
    setIsLoading(false)
  }, [id])

  useEffect(() => {
    getTransaction()
  }, [getTransaction])

  const token = _.get(transaction, 'payment_token', '')

  return (
    <div className="h-[720px] w-full">
      {isLoading ? (
        <div className="h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <iframe
          src={`https://app.sandbox.midtrans.com/snap/v4/redirection/${token}`}
          width="100%"
          height="100%"
        />
      )}
    </div>
  )
}
