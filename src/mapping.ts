import { BigInt, store } from "@graphprotocol/graph-ts"
import { AutographContract, AutographMinted, Transfer } from "../generated/AutographContract/AutographContract"
import { RequestContract, RequestCreated, RequestDeleted, RequestSigned } from "../generated/RequestContract/RequestContract"
import { Request, Autograph } from "../generated/schema"

// Requests Contract

export function handleRequestCreated(event: RequestCreated): void {
  let request = Request.load(event.params.id.toString())
  if (request == null) {
    request = new Request(event.params.id.toString())
  }

  request.from = event.params.from
  request.to = event.params.to.toHex()
  request.price = event.params.price
  request.responseTime = event.params.responseTime
  request.created = event.params.created
  request.save()
}

export function handleRequestDeleted(event: RequestDeleted): void {
  let id = event.params.id.toString()
  store.remove('Request', id)
}

export function handleRequestSigned(event: RequestSigned): void {
  let id = event.params.id.toString()
  store.remove('Request', id)
}

// Autograph Contract

export function handleAutographMinted(event: AutographMinted): void {
  let autograph = Autograph.load(event.params.id.toString())
  if (autograph == null) {
    autograph = new Autograph(event.params.id.toString())
  }

  autograph.creator = event.params.creator.toHex()
  autograph.owner = event.params.owner
  autograph.imageURI = event.params.imageURI
  autograph.metadataURI = event.params.imageURI
  autograph.save()
}

export function handleTransfer(event: Transfer): void {
  let id = event.params.tokenId.toString()

  let autograph = Autograph.load(id)
  if (autograph == null) {
    autograph = new Autograph(id)
  }

  autograph.owner = event.params.to
  autograph.save()
}