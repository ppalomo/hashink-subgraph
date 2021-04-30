# Hashink Subgraph
Hashink subgraph repository.

## Get user NFT collection

```
{
  autographs(where:{owner:"0x25f1db85c33e4b3d3732d02371dd13f7477f6185"}) {
    id
    owner
    creators
    imageURI
    metadataURI
  }
}
```

## NFT collection by creator

```
{
  autographs(where:{creators_contains:["0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc"]}) {
    id
    owner
    creators
    imageURI
    metadataURI
  }
}
```
