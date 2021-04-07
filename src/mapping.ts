import { BigInt } from "@graphprotocol/graph-ts"
import { CelebrityContract, CelebrityCreated, CelebrityDeleted, CelebrityUpdated } from "../generated/CelebrityContract/CelebrityContract"
import { Celebrity } from "../generated/schema"

export function handleCelebrityCreated(event: CelebrityCreated): void {
  let entity = Celebrity.load(event.params.owner)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new Celebrity(event.params.owner)
  }

  //entity.address = event.params.owner
  entity.name = event.params.name
  entity.price = event.params.price
  entity.responseTime = event.params.responseTime
  entity.save()
}
