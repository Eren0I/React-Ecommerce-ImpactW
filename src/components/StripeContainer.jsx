
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import React from 'react'
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY= "pk_test_51M1T4QJRKP4NsA1w6kIqJnUUPlLNIeVEjTg80spwQWA4F2ibFaid4A4zKTOufNznrjVeSzlCEKmql6KAHPjgY9xB00q3KhbnNo"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
<PaymentForm />
    </Elements>
  )
}
