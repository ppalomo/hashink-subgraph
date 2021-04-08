import { BigInt } from "@graphprotocol/graph-ts"
import { CelebrityContract, CelebrityCreated, CelebrityDeleted, CelebrityUpdated } from "../generated/CelebrityContract/CelebrityContract"
import { Celebrity } from "../generated/schema"

export function handleCelebrityCreated(event: CelebrityCreated): void {
  let celebrity = Celebrity.load(event.transaction.from.toHex())
  if (celebrity == null) {
    celebrity = new Celebrity(event.transaction.from.toHex())
  }

  celebrity.name = event.params.name
  celebrity.price = event.params.price
  celebrity.responseTime = event.params.responseTime
  celebrity.save()
}

export function handleCelebrityDeleted(event: CelebrityDeleted): void {
  //???????????????????????????
}

export function handleCelebrityUpdated(event: CelebrityUpdated): void {
  let id = event.params.owner.toHex()
  let celebrity = Celebrity.load(id)
  if (celebrity == null) {
    celebrity = new Celebrity(id)
  }

  celebrity.name = event.params.name
  celebrity.price = event.params.price
  celebrity.responseTime = event.params.responseTime
  celebrity.save()
}

// export function handleCelebrityCreated(event: CelebrityCreated): void {
// }

// export function handleCelebrityCreated(event: CelebrityCreated): void {
// }

// export function handleCelebrityCreated(event: CelebrityCreated): void {
// }