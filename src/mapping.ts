import { Bytes } from "@graphprotocol/graph-ts"
import { AutographContract, AutographMinted, Transfer } from "../generated/AutographContract/AutographContract"
import { Autograph } from "../generated/schema"

// Autograph Contract

export function handleAutographMinted(event: AutographMinted): void {
  let autograph = Autograph.load(event.params.id.toString())
  if (autograph == null) {
    autograph = new Autograph(event.params.id.toString())
  }

  let creators = event.params.creators;
  let creatorsList = new Array<Bytes>();
  for (let i = 0; i < creators.length; i++) {
    let creator = creators[i];
    creatorsList.push(creator);
  }
  
  autograph.creators = creatorsList;
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