import { Session } from "inspector"
import { NextResponse } from "next/server"
// @ts-ignore
import { validateCartItems } from "use-shopping-cart/utilities"

import { inventory } from "@/config/inventory"
import { stripe } from "@/lib/stripe"

export async function POST(request: Request) {
  const cartDetails = await request.json()
  const lineItems = validateCartItems(inventory, cartDetails)
  const origin = request.headers.get("origin")
  await stripe.checkout.sessions.create({
    submit_type: "pay",
    mode: "payment",
    payment_method_types: ["card"],
    line_items: lineItems,
    shipping_address_collection: {
      allowed_countries: ["US", "AM", "CO", "BT", "SA"],
    },
    shipping_options: [
      {
        shipping_rate: "shr_10EHLADhyhl9j6LNYbNvfhjQ",
      },
    ],
    billing_address_collection: "auto",
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
  })
  return NextResponse.json(Session)
}
