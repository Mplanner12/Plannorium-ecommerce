import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skZl6neeJpL5PAZJsbHHaksd9nzGJRPoDi5h7UTZQ8BHLUIqi1chXFY1OdJcT8jCDGjEY2qDwD5Tf8uKSB1Iq9OKOoBpG7ZoNNfnx6eSERU02KFpqT3HbEvbcHGU2c9twwMkfWyxGJt7gKC1CJuZ6tZLkG1RwpqeXMjknJPJHGwhkvx7rneR",
})
