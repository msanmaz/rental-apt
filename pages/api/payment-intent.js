import Stripe from 'stripe';
import prisma from 'lib/prisma'
import sendEmail from 'lib/email.js'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



export default async function handler(req, res) {
  const { amount, payment_intent_id } = req.body
  console.log(req.body)
  if (req.method === 'POST') {

    if (req.body.paid === true) {

      const booking = await prisma.booking.create({
        data: {
          price: amount,
          paid: true,
          sessionId: payment_intent_id,
          from: req.body.from,
          to: req.body.to,
        },
      });
      
      res.status(201).json({
        message: 'Booking created successfully',
        booking: booking,
      });

      return; 
      // sendEmail(
      //   'you@youremail.com',
      //   'New booking',
      //   `${email} booked from ${new Date(
      //     booking.from
      //   ).toDateString()} to ${new Date(booking.to).toDateString()}`
      // )
      
      // sendEmail(
      //   email,
      //   'Thanks for booking',
      //   `Your booking from ${new Date(
      //     booking.from
      //   ).toDateString()} to ${new Date(
      //     booking.to
      //   ).toDateString()} is confirmed!`
      // )

    } else {



      if (payment_intent_id) {
        try {
          // If a payment_intent_id is passed, retrieve the paymentIntent
          const current_intent = await stripe.paymentIntents.retrieve(
            payment_intent_id
          );
          // If a paymentIntent is retrieved update its amount
          if (current_intent) {
            const updated_intent = await stripe.paymentIntents.update(
              payment_intent_id,
              {
                amount: amount * 100,
              }
            );

            res.status(200).json(updated_intent);
            return;
          }
        } catch (e) {
          //Catch any error and return a status 500
          if (e.code !== 'resource_missing') {
            const errorMessage =
              e instanceof Error ? e.message : 'Internal server error';
            res.status(500).json({ statusCode: 500, message: errorMessage });
            return;
          }
        }
      }




      try {
        // Create PaymentIntent
        const params = {
          amount: amount * 100,
          currency: 'eur',
          description: 'Purchase nights from ' +
            new Date(req.body.from).toDateString() +
            ' to ' +
            new Date(req.body.to).toDateString(),
          payment_method_types: ["card"]
        };
        const payment_intent = await stripe.paymentIntents.create(params);
        //Return the payment_intent object
        res.status(200).json(payment_intent);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Internal server error';
        res.status(500).json({ statusCode: 500, message: errorMessage });
      }

    }


  }


  res.end()

};
